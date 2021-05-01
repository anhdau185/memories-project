import React, { useEffect, useState } from 'react';
import FileBase64 from 'react-file-base64/build/build';
import { Paper, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import createPost from 'actions/createPost';
import updatePost from 'actions/updatePost';
import removeCurrentPost from 'actions/removeCurrentPost';
import useStyles from './styles';

const Form = () => {
    const [postData, setPostData] = useState({
        author: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    const currentPost = useSelector(state => state.currentPost);

    useEffect(() => {
        if (currentPost) {
            setPostData({
                ...currentPost,
                tags: currentPost.tags.join(', ')
            });
        } else {
            setPostData({
                author: '',
                title: '',
                message: '',
                tags: '',
                selectedFile: ''
            });
        }
    }, [currentPost]);

    const dispatch = useDispatch();
    const classes = useStyles();

    const clearForm = () => {
        setPostData({
            author: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        const standardizedData = {
            ...postData,
            tags: postData.tags.trim().replace(/[\s#]/g, '').split(',')
        };

        if (currentPost) {
            dispatch(updatePost(currentPost._id, standardizedData));
        } else {
            dispatch(createPost(standardizedData, clearForm));
        }
    };

    return (
        <Paper className={`${classes.root} ${classes.paper}`}>
            <form
                autoComplete="off"
                noValidate
                className={classes.form}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6" align="center" style={{ marginBottom: '4px', width: '100%' }}>
                    {!currentPost ? 'Create' : 'Edit'} a Memory
                </Typography>
                {currentPost
                    ? (<>
                        <Typography variant="body2" align="center" style={{ marginBottom: '8px', width: '100%' }}>
                            Now editing <b>{currentPost.title}</b>
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            style={{ marginBottom: '5px' }}
                            onClick={() => dispatch(removeCurrentPost())}
                        >
                            Create new post
                        </Button>
                    </>)
                    : null
                }
                <TextField
                    name="author"
                    label="Author"
                    variant="outlined"
                    fullWidth
                    value={postData.author}
                    onChange={e => setPostData({ ...postData, author: e.target.value })}
                />
                <TextField
                    name="title"
                    label="Title"
                    variant="outlined"
                    fullWidth
                    value={postData.title}
                    onChange={e => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name="message"
                    label="Message"
                    variant="outlined"
                    fullWidth
                    value={postData.message}
                    onChange={e => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name="tags"
                    label="Tags"
                    variant="outlined"
                    fullWidth
                    value={postData.tags}
                    onChange={e => setPostData({ ...postData, tags: e.target.value })}
                />
                <div className={classes.fileInput}>
                    <FileBase64
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button
                    type="submit"
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    fullWidth
                    onClick={clearForm}
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Form;
