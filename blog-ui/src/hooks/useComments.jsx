import { useReducer } from "react";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

/**
 * The reducer function for comments state.
 * @param {object} state - The current state of comments.
 * @param {object} action - The action to perform on the state.
 * @returns {object} The new state of comments.
 */
function commentReducer(state, action) {
  /**
   * Fetches comments from the server.
   * @param {object} state - The current state of comments.
   * @param {object} action - The action to perform on the state.
   * @returns {object} The new state of comments.
   */
  const fetchComments = (action) => {
    return {
      comments: action.payload,
      loading: false,
      error: null,
    };
  };

  /**
   * Handles the error when fetching comments from the server.
   * @param {object} state - The current state of comments.
   * @param {object} action - The action to perform on the state.
   * @returns {object} The new state of comments.
   */
  const fetchCommentsError = (action) => {
    return {
      comments: [],
      loading: false,
      error: action.payload,
    };
  };

  /**
   * Adds a new comment to the state.
   * @param {object} state - The current state of comments.
   * @param {object} action - The action to perform on the state.
   * @returns {object} The new state of comments.
   */
  const addComment = (state, action) => {
    return {
      comments: [...state.comments, action.payload],
      loading: false,
      error: null,
    };
  };

  /**
   * Handles the error when adding a new comment to the state.
   * @param {object} state - The current state of comments.
   * @param {object} action - The action to perform on the state.
   * @returns {object} The new state of comments.
   */
  const addCommentError = (state, action) => {
    return {
      comments: state.comments,
      loading: false,
      error: action.payload,
    };
  };

  /**
   * Deletes a comment from the state.
   * @param {object} state - The current state of comments.
   * @param {object} action - The action to perform on the state.
   * @returns {object} The new state of comments.
   */
  const deleteComment = (state, action) => {
    return {
      comments: state.comments.filter(
        (comment) => comment.id !== action.payload
      ),
      loading: false,
      error: null,
    };
  };

  /**
   * Handles the error when deleting a comment from the state.
   * @param {object} state - The current state of comments.
   * @param {object} action - The action to perform on the state.
   * @returns {object} The new state of comments.
   */
  const deleteCommentError = (state, action) => {
    return {
      comments: state.comments,
      loading: false,
      error: action.payload,
    };
  };

  /**
   * Updates a comment in the state.
   * @param {object} state - The current state of comments.
   * @param {object} action - The action to perform on the state.
   * @returns {object} The new state of comments.
   */
  const updateComment = (state, action) => {
    return {
      comments: state.comments.map((comment) => {
        if (comment.id === action.payload.id) {
          return action.payload;
        }
        return comment;
      }),
      loading: false,
      error: null,
    };
  };

  /**
   * Handles the error when updating a comment in the state.
   * @param {object} state - The current state of comments.
   * @param {object} action - The action to perform on the state.
   * @returns {object} The new state of comments.
   */
  const updateCommentError = (state, action) => {
    return {
      comments: state.comments,
      loading: false,
      error: action.payload,
    };
  };

  /**
   * Likes a comment in the state.
   * @param {object} state - The current state of comments.
   * @param {object} action - The action to perform on the state.
   * @returns {object} The new state of comments.
   */
  const likeComment = (state, action) => {
    return {
      comments: state.comments.map((comment) => {
        if (comment.id === action.payload.id) {
          return action.payload;
        }
        return comment;
      }),
      loading: false,
      error: null,
    };
  };

  /**
   * Removes like from a comment in the state.
   * @param {object} state - The current state of comments.
   * @param {object} action - The action to perform on the state.
   * @returns {object} The new state of comments.
   */
  const unlikeComment = (state, action) => {
    return {
      comments: state.comments.map((comment) => {
        if (comment.id === action.payload.id) {
          return action.payload;
        }
        return comment;
      }),
      loading: false,
      error: null,
    };
  };

  switch (action.type) {
    case "FETCH_COMMENTS":
      return fetchComments(state, action);
    case "FETCH_COMMENTS_ERROR":
      return fetchCommentsError(state, action);
    case "ADD_COMMENT":
      return addComment(state, action);
    case "ADD_COMMENT_ERROR":
      return addCommentError(state, action);
    case "DELETE_COMMENT":
      return deleteComment(state, action);
    case "DELETE_COMMENT_ERROR":
      return deleteCommentError(state, action);
    case "UPDATE_COMMENT":
      return updateComment(state, action);
    case "UPDATE_COMMENT_ERROR":
      return updateCommentError(state, action);
    case "LIKE_COMMENT":
      return likeComment(state, action);
    case "UNLIKE_COMMENT":
      return unlikeComment(state, action);
    default:
      return state;
  }
}
// Removed unused async functions: addComment, updateComment, deleteComment

/**
 * Returns an array of functions to interact with the comments reducer.
 * @returns {array} - An array containing the state, dispatch function, and three functions to add, edit, and delete comments.
 */
function useCommentsReducer() {
  const [commentsState, dispatchComments] = useReducer(
    commentReducer,
    initialState
  );

  const addComment = (commentData) =>
    dispatchComments({ type: "ADD_COMMENT", payload: commentData });
  const editComment = (commentData) =>
    dispatchComments({ type: "UPDATE_COMMENT", payload: commentData });
  const deleteComment = (commentId) =>
    dispatchComments({ type: "DELETE_COMMENT", payload: commentId });

  return [
    commentsState,
    dispatchComments,
    addComment,
    editComment,
    deleteComment,
  ];
}
export default useCommentsReducer;
