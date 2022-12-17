import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { GrAdd } from "react-icons/gr";

const Discussions = () => {
    return (
    <Container id='discContainer'>
      <Row id='discRow' className='container-fluid'>
        <Col id='discCol'>
            <Card id='discPostBtn'>
            <Link id='discText' to="/createpost"><GrAdd /> Discussion Post</Link>
            </Card>
            <Col>
            <Card id='discPost'>
              <div id='discHeader'>
                <h1 id='discTitle'>What is Lorem Ipsum?</h1> 
              </div>
              <p id='discContent'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <span id='discInfo'>Posted by: User At: 12:03pm</span>
            </Card>
            </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Discussions;