import React, { useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { GrAdd } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { BiSave } from "react-icons/bi";

import { useMutation } from '@apollo/client';

import { UPDATE_REACTION } from '../../utils/mutations';
import { DELETE_REACTION } from '../../utils/mutations';

const Comments = ({ reaction, post }) => {
    const [editMode, setEditMode] = useState(false)

    console.log(reaction);
    const [comment, setComment] = useState(reaction.comment);

    const [addComment, { error2 }] = useMutation(UPDATE_REACTION);
    const [deleteReaction, { error3 }] = useMutation(DELETE_REACTION);

    const handleReactionSubmit = async (event) => {
        event.preventDefault();
        const commentdata = await addComment({
            variables: { reactionid: reaction._id, comment: comment },
        });
        setComment(reaction.comment);
        setEditMode(!editMode)
    };

    const handleReactionDelete = async (event) => {
        event.preventDefault();
        const data = await deleteReaction({
            variables: { reactionid: reaction._id, postid: post },
        });
    };



    return (
        <>
        {editMode ?
            <Card id='singleBuildPost'>
                <form onSubmit={handleReactionSubmit}>
                    <input
                        id='singleBuildComment'
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                        <span>
                            <button type='submit'><span id='editIcon' ><BiSave /></span></button>
                            <span id='deleteIcon' onClick={handleReactionDelete}><MdDeleteForever /></span>
                        </span>
                        <span id='singleBuildInfo'>Posted by: {reaction.user.username} At: {reaction.createdAt}</span>
                    </div>
                </form>
            </Card>
            :
            <Card id='singleBuildPost'>
                <p id='singleBuildComment'>{reaction.comment}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                    <span>
                        <span id='editIcon' onClick={() => setEditMode(!editMode)}><CiEdit /></span>
                        <span id='deleteIcon' onClick={handleReactionDelete}><MdDeleteForever /></span>
                    </span>
                    <span id='singleBuildInfo'>Posted by: {reaction.user.username} At: {reaction.createdAt}</span>
                </div>
            </Card>
        }
        </>
    );
};

export default Comments;
