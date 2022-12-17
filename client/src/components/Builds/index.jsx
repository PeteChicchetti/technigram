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
          <Card id='buildPostBtn'>
            <Link id='buildText' to="/createpost"><GrAdd /> Comment</Link>
          </Card>
          <Col>
            {loading ? (
              <p>loading</p>
            ) : (
              posts.map((post) => (
                <Card id='buildPost' key={post._id}>
                  <Link id='buildLink'
                    to={`/builds/${post._id}`}>
                  <div id='buildHeader'>
                    <h1 id='buildTitle'>{post.title}</h1>
                  </div>
                  <p id='buildContent'>{post.content}</p>
                  <div id='buildInfo'><span className='buildPostInfo'>Posted by: </span> {post.user.username} | <span className='buildPostInfo'>On: </span>{post.createdAt}</div>
                  </Link>
                </Card>
              ))
            )}
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Build;

