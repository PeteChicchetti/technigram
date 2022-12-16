import React, { useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { GrAdd } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { BiSave } from "react-icons/bi";

import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { QUERY_POST } from '../../utils/queries';
import { UPDATE_POST } from '../../utils/mutations';
import { DELETE_POST } from '../../utils/mutations';

const SingleBuild = () => {
    const [editMode, setEditMode] = useState(false)

    const { postid } = useParams();
    const { loading, data } = useQuery(QUERY_POST, {
        variables: { postid: postid },
    });
    const post = data?.post || {};

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);


    const [addTitle, { error }] = useMutation(UPDATE_POST);
    const [addContent, { error2 }] = useMutation(UPDATE_POST);
    const [deletePost, { error3 }] = useMutation(DELETE_POST);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const contentdata = await addContent({
            variables: { postid: postid, content: content },
        });
        const titledata = await addTitle({
            variables: { postid: postid, title: title },
        });
        setTitle(post.title);
        setContent(post.content);
        setEditMode(!editMode)
        
    };
    const handleDelete = async (event) => {
        event.preventDefault();
        const titledata = await deletePost({
            variables: { postid: post._id },
        });
    };



    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <Container id='singleBuildContainer'>
            <Row id='singleBuildRow' className='container-fluid'>
                <Col id='singleBuildCol'>

                    {editMode ?
                        <Card id='singleBuildPost'>
                            <form onSubmit={handleFormSubmit}>
                                <div id='singleBuildHeader'>
                                    <input
                                        id='editBuildTitle'
                                        value={title}
                                        onChange={(event) => setTitle(event.target.value)}
                                    />
                                </div>
                                <textarea
                                    id='editBuildContent'
                                    value={content}
                                    onChange={(event) => setContent(event.target.value)} />
                                <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                    <span>
                                        <button type='submit'><span id='editIcon' ><BiSave /></span></button>
                                        <span id='deleteIcon' onClick={handleDelete}><MdDeleteForever /></span>
                                    </span>
                                    <span id='singleBuildInfo'>Posted by: {post.user.username} At: {post.createdAt}</span>
                                </div>
                            </form>
                        </Card>
                        :
                        <Card id='singleBuildPost'>
                            <div id='singleBuildHeader'>
                                <h1 id='singleBuildTitle'>{post.title}</h1>
                            </div>
                            <p id='singleBuildContent'>{post.content}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <span><span id='editIcon' onClick={() => setEditMode(!editMode)}><CiEdit /></span><span id='deleteIcon' onClick={handleDelete}><MdDeleteForever /></span></span>
                                <span id='singleBuildInfo'>Posted by: {post.user.username} At: {post.createdAt}</span>
                            </div>
                        </Card>

                    }

                    {post.reactions.map((reaction) => (
                        <Card id='singleBuildPost' key={reaction._id}>
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
