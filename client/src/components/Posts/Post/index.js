import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import moment from 'moment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import setCurrentPost from 'actions/setCurrentPost';
import deletePost from 'actions/deletePost';
import useStyles from './styles';

const Post = ({ post }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={post.selectedFile}
                title={post.title}
            />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.author}</Typography>
                <Typography variant="body2">{moment(post.createAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button
                    style={{ color: 'white' }}
                    size="small"
                    onClick={() => dispatch(setCurrentPost(post))}
                >
                    Edit
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">
                    {post.tags.map(tag => tag.indexOf('#') === -1 ? `#${tag} ` : `${tag} `)}
                </Typography>
            </div>
            <CardContent>
                <Typography variant="h5" gutterBottom>{post.title}</Typography>
                <Typography variant="body1" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="secondary" onClick={() => { }}>
                    {post.likeCount > 0
                        ? <FavoriteIcon fontSize="default" />
                        : <FavoriteBorderIcon fontSize="default" />
                    }
                    &nbsp;{post.likeCount}
                </Button>
                <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                        if (window.confirm('Delete this post?')) dispatch(deletePost(post._id));
                    }}
                >
                    <DeleteIcon fontSize="default" />
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;
