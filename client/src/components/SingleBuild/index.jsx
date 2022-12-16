import React, { useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { GrAdd } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { BiSave } from "react-icons/bi";

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { QUERY_POST } from '../../utils/queries';

const SingleBuild = () => {
    const [editMode, setEditMode] = useState(false)

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
        <Container id='singleBuildContainer'>
            <Row id='singleBuildRow' className='container-fluid'>
                <Col id='singleBuildCol'>

                    {editMode ? 
                    <Card id='singleBuildPost' key={post._id}>
                        <form>
                            <div id='singleBuildHeader'>
                                <input id='editBuildTitle' placeholder='Edit Title'></input>
                            </div>
                                <textarea id='editBuildContent' placeholder='Edit Content'></textarea>
                            <div style={{ display: 'flex', justifyContent: 'space-between'}} >
                                <span>
                                    <span id='editIcon' onClick=''><BiSave/></span>
                                    <span id='deleteIcon'><MdDeleteForever /></span>
                                </span>
                                <span id='singleBuildInfo'>Posted by: {post.user.username} At: {post.createdAt}</span>
                            </div>
                        </form>
                    </Card> 
                    :
                    <Card id='singleBuildPost' key={post._id}>
                        <div id='singleBuildHeader'>
                            <h1 id='singleBuildTitle'>{post.title}</h1>
                        </div>
                            <p id='singleBuildContent'>{post.content}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between'}} >
                        <span><span id='editIcon' onClick={() => setEditMode(!editMode)}><CiEdit/></span><span id='deleteIcon' type='submit'><MdDeleteForever /></span></span>
                        <span id='singleBuildInfo'>Posted by: {post.user.username} At: {post.createdAt}</span>
                        </div>
                    </Card>

                    }

                    {post.reactions.map((reaction) => (
                        <Card id='singleBuildPost' key={reaction.id}>
                            <p id='singleBuildComment'>{reaction.comment}</p>
                            <span id='singleBuildInfo'>Posted by: {reaction.user.username} At: {reaction.createdAt}</span>
                        </Card>
                    ))}
                    <Card id='addCommentBtn'>
                        <Link id='commentText' to="/createpost"><GrAdd /> Comment</Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SingleBuild;
