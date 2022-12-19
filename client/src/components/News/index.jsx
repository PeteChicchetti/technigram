import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";



const News = () => {
  const url = 'https://news-api14.p.rapidapi.com/top-headlines?country=us&language=en&pageSize=10&category=technology';
  const [results, setResults] = useState([])

  // const getNews = () => {
  //   fetch(url)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       const results = data
  //       console.log(results);
  //       setResults(results.articles);

  //     })
  //     .catch(function (error) {
  //       console.error("There was an error parsing the response as JSON: " + error);
  //     });
  // }
  const getNews = () => {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7e06928a00msh707867a2a351098p112c16jsn62fbfdebcd93',
      'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
    }
  };
  
  
  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const results = data
      console.log(results);
      setResults(results.articles);
    })
    .catch(function (error) {
      console.error('There was an error parsing the response as JSON: ' + error);
    });
  }

  useEffect(() => {
    getNews();
  }, [])

  return (
    <>
      <Container id='newsContainer'  >
        <Row id='newsRow' className='container-fluid' >
          <Col id='newsCol'>
            <Col>
              {results.map((result, index) => {
                return (

                  <Card id='newsPost' key={index}>
                    <div id='newsHeader'>
                      <a id='newsTitle' href={result.url} target='_blank'>{result.title}</a>
                      
                    </div>
                    <img src={result.urlToImage} className='newsImage'></img>
                    <p id='newsContent'>{result.description}</p>
                    <a id='newsSource' href={result.publisher.url} target='_blank'> Source: {result.publisher.name}</a>
                  </Card>
                )
              })}
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default News;