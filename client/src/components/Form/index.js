import React, { useState } from 'react';
import FileBase64 from 'react-file-base64/build/build';
import { Paper, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import createPost from 'actions/createPost';
import useStyles from './styles';

const Form = () => {
    const [postData, setPostData] = useState({
        author: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

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

    const processFormData = ({ author, title, message, tags, selectedFile }) => ({
        author,
        title,
        message,
        tags: tags.trim().replaceAll(' ', '').split(','),
        selectedFile
    });

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(createPost(processFormData(postData), clearForm));
    };

    return (
        <Paper className={`${classes.root} ${classes.paper}`}>
            <form
                autoComplete="off"
                noValidate
                className={classes.form}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">Create a Memory</Typography>
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
