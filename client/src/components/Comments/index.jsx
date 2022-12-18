import React, { useState } from 'react';
import { Card } from "react-bootstrap";
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
            <Card id='commentBuildPost'>
                <form onSubmit={handleReactionSubmit}>
                    <input
                        id='editCommentPost'
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                        <span>
                            <button id='saveCommentBtn' type='submit'><span id='saveComment' ><BiSave /></span></button>
                            <span id='deleteCommentIcon' onClick={handleReactionDelete}><MdDeleteForever /></span>
                        </span>
                        <span id='commentBuildInfo'><span className='commentInfo'>Posted by: </span> {reaction.user.username} | <span className='commentInfo'>On: </span>{reaction.createdAt}</span>
                    </div>
                </form>
            </Card>
            :
            <Card id='commentBuildPost'>
                <p id='commentPost'>{reaction.comment}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                    <span>
                        <span id='editCommentIcon' onClick={() => setEditMode(!editMode)}><CiEdit /></span>
                        <span id='deleteCommentIcon' onClick={handleReactionDelete}><MdDeleteForever /></span>
                    </span>
                    <span id='commentBuildInfo'><span className='commentInfo'>Posted by: </span> {reaction.user.username} | <span className='commentInfo'>On: </span>{reaction.createdAt}</span>
                </div>
            </Card>
        }
        </>
    );
};

export default Comments;
