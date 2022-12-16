import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { GrAdd } from "react-icons/gr";

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { QUERY_POST } from '../../utils/queries';

const SingleBuild = () => {
    const { postid } = useParams();
    const { loading, data } = useQuery(QUERY_POST, {
        variables: { postid: postid },
    });
    const post = data?.post || {};
    console.log(postid);
    console.log(data);
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <Container id='buildContainer'>
            <Row id='buildRow' className='container-fluid'>
                <Col id='buildCol'>

                    <Card id='buildPost' key={post._id}>
                        <div id='buildHeader'>
                            <h1 id='buildTitle'>{post.title}</h1>
                        </div>
                        <p id='buildContent'>{post.content}</p>
                        <span id='buildInfo'>Posted by: {post.user.username} At: {post.createdAt}</span>
                    </Card>
                    {post.reactions.map((reaction) => (
                        <Card id='buildPost' key={reaction.id}>
                            <p id='buildContent'>{reaction.comment}</p>
                            <span id='buildInfo'>Posted by: {reaction.user.username} At: {reaction.createdAt}</span>
                        </Card>
                    ))}
                    <Card id='buildPostBtn'>
                        <Link id='buildText' to="/createpost"><GrAdd /> Comment</Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SingleBuild;
