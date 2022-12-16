import React,{ useState, useEffect} from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";


const News = () => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=6798423f8ca44d86a70f8c879be30589`;
  const [results, setResults] = useState([])

const getNews = () => {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const results = data
      console.log(results);
      setResults(results.articles);
      
    })
    .catch(function(error) {
      console.error("There was an error parsing the response as JSON: " + error);
    });
}


useEffect(() => {
  // var req = new Request(url);
  getNews();
}, [])

return (
  <>
  {results.map((result, index) => {
    return (
      <Container id='newsContainer' key={index} href={result.url} target='__blank'>
    <Row id='newsRow' className='container-fluid'>
      <Col id='newsCol'>
          <Col>
          <Card id='newsPost'>
            <div id='newsHeader'>
              <h1 id='newsTitle'>{result.title}</h1> 
            </div>
            <img src={result.urlToImage} className='newsImage'></img>
            <p id='newsContent'>{result.description}</p>
            <span id='newsInfo'>Author: {result.author}, Source: {result.source.name}</span>
          </Card>

          </Col>
      </Col>
    </Row>
  </Container>

    )
  
  })}
 </>
)
}

export default News;