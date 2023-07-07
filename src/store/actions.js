import { SET_TODO, ADD_TODO, DELETE_TODO, COMPLETE_TODO, EDIT_TODO } from "./constants";

export const set_todo = (payload) => {
  return {
    type: SET_TODO,
    payload,
  };
};

export const add_todo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const delete_todo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const complete_todo = (payload) => {
  return {
    type: COMPLETE_TODO,
    payload,
  };
};

export const edit_todo = (payload) => {
  return {
    type: EDIT_TODO,
    payload,
  };
};
