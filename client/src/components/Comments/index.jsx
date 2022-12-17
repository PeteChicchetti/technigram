import React, { useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { GrAdd } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { BiSave } from "react-icons/bi";

import { useMutation } from '@apollo/client';

import { QUERY_POST } from '../../utils/queries';
import { UPDATE_POST } from '../../utils/mutations';
import { DELETE_REACTION } from '../../utils/mutations';

const Comments = ({ reaction, post }) => {
     const [editMode, setEditMode] = useState(false)

    console.log(reaction);
    // const [title, setTitle] = useState(post.title);
    // const [content, setContent] = useState(post.content);


    // const [addTitle, { error }] = useMutation(UPDATE_POST);
    // const [addContent, { error2 }] = useMutation(UPDATE_POST);
     const [deleteReaction, { error3 }] = useMutation(DELETE_REACTION);

    // const handlePostSubmit = async (event) => {
    //     event.preventDefault();
    //     const contentdata = await addContent({
    //         variables: { postid: postid, content: content },
    //     });
    //     const titledata = await addTitle({
    //         variables: { postid: postid, title: title },
    //     });
    //     setTitle(post.title);
    //     setContent(post.content);
    //     setEditMode(!editMode)
    // };

    const handleReactionDelete = async (event) => {
        event.preventDefault();
        const data = await deleteReaction({
            variables: { reactionid: reaction._id, postid: post },
        });
    };



    return (
        <Card id='singleBuildPost'>
            <p id='singleBuildComment'>{reaction.comment}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                <span><span id='editIcon' onClick={() => setEditMode(!editMode)}><CiEdit /></span><span id='deleteIcon' onClick={handleReactionDelete}><MdDeleteForever /></span></span>
                <span id='singleBuildInfo'>Posted by: {reaction.user.username} At: {reaction.createdAt}</span>
            </div>
        </Card>
    );
};

export default Comments;
