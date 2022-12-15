import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";


const url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=9ebfdc0cfd8f4c588075e86b55ffc660`;

var req = new Request(url);
fetch(req)
    .then(function(response) {
        // Return the JSON data from the API response
        return response.json();
    })
    .then(function(data) {
        // Log the actual data from the API response
        console.log(data);
    });


const News = () => {
  return (
    <Container id='newsContainer'>
      <Row id='newsRow' className='container-fluid'>
        <Col id='newsCol'>
            <Col>
            <Card id='newsPost'>
              <div id='newsHeader'>
                <h1 id='newsTitle'>Cool News Page</h1> 
              </div>
              <p id='newsContent'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <span id='newsInfo'>Posted by: User At: 12:03pm</span>
            </Card>

            </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default News;