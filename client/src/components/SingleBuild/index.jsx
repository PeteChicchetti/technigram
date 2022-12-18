import React, { useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { GrAdd } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { BiSave } from "react-icons/bi";

import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';

import Comments from '../Comments/index';

import { QUERY_POST } from '../../utils/queries';
import { UPDATE_POST } from '../../utils/mutations';
import { DELETE_POST } from '../../utils/mutations';
import { ADD_REACTION } from '../../utils/mutations';

const SingleBuild = () => {
    const [editMode, setEditMode] = useState(false)
    const [addMode, setAddMode] = useState(false)

    const [comment, setComment] = useState('');

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
    const [addReaction, { error4 }] = useMutation(ADD_REACTION);

    const handlePostSubmit = async (event) => {
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
    const handlePostDelete = async (event) => {
        event.preventDefault();
        const data = await deletePost({
            variables: { postid: post._id },
        });
    };

    const handleReactionSubmit = async (event) => {
        event.preventDefault();
        const data = await addReaction({
            variables: { comment: comment, postid: post._id },
        });
        setComment('');
        setAddMode(!addMode)

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
                            <form onSubmit={handlePostSubmit}>
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
                                        <button id='savePostBtn' type='submit'><span id='savePostIcon' ><BiSave /></span></button>
                                        <span id='deleteIcon' onClick={handlePostDelete}><MdDeleteForever /></span>
                                    </span>
                                    <span id='singleBuildInfo'><span className='postInfo'>Posted by: </span> {post.user.username} | <span className='postInfo'>On: </span>{post.createdAt}</span>
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
                                <span><span id='editIcon' onClick={() => setEditMode(!editMode)}><CiEdit /></span><span id='deleteIcon' onClick={handlePostDelete}><MdDeleteForever /></span></span>
                                <span id='singleBuildInfo'><span className='postInfo'>Posted by: </span> {post.user.username} | <span className='postInfo'>On: </span>{post.createdAt}</span>
                            </div>
                        </Card>

                    }
                    {addMode ?
                        <Card id='singleBuildPost'>
                            <form onSubmit={handleReactionSubmit}>
                                <input
                                    id='singleBuildComment'
                                    value={comment}
                                    onChange={(event) => setComment(event.target.value)}
                                />
                                <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                    <span>
                                        <button className='saveCommentBtn' type='submit'><span id='addIcon' ><BiSave /></span></button>
                                    </span>
                                </div>
                            </form>
                        </Card>
                        :
                        <Card id='addCommentBtn'>
                            <span id='commentText' onClick={() => setAddMode(!editMode)}><GrAdd /> Comment</span>
                        </Card>
                    }

                    {post.reactions.map((reaction) => (
                        <Comments reaction={reaction} key={reaction._id} post={post._id}>
                        </Comments>
                    ))}

                </Col>
            </Row>
        </Container>
    );
};

export default SingleBuild;
