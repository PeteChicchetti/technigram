import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";


const News = () => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=6798423f8ca44d86a70f8c879be30589`;
  const [results, setResults] = useState([])

  const getNews = () => {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const results = data
        console.log(results);
        setResults(results.articles);

      })
      .catch(function (error) {
        console.error("There was an error parsing the response as JSON: " + error);
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
                    <span id='newsInfo'>Author: {result.author}, Source: {result.source.name}</span>
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