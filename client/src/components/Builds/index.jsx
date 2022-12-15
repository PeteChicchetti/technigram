import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { GrAdd } from "react-icons/gr";
import { useQuery } from '@apollo/client';


import { QUERY_POSTS } from '../../utils/queries';

const Build = () => {

  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(data);
  return (
    <Container id='buildContainer'>
      <Row id='buildRow' className='container-fluid'>
        <Col id='buildCol'>
            <Card id='addPost'>
            <Link id='postText' to="/createpost"><GrAdd /></Link>
            </Card>
            <Col>
            {loading ? (
              <p>loading</p>
            ) : (
                posts.map((post) =>(
                <Card id='buildPost' key={post._id}>
                  <div id='postHeader'>
                    <h1 id='postTitle'>{post.title}</h1> 
                  </div>
                  <p id='buildContent'>{post.content}</p>
                  <span id='postInfo'>Posted by: {post.user.username} At: {post.createdAt}</span>
                </Card>
                ))
            )}
            
            </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Build

