import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllPosts } from "../../actions/post";
import PostSummary from "./PostSummary";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: "auto",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
}));

const PostList = ({ posts, loading, getAllPosts }) => {
  const classes = useStyles();

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h6">Posts</Typography>
      {loading ? (
        <CircularProgress />
      ) : posts ? (
        posts.map((post) => <PostSummary key={post._id} post={post} />)
      ) : (
        <Typography>No posts yet</Typography>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  loading: state.post.loading,
});

export default connect(mapStateToProps, { getAllPosts })(PostList);