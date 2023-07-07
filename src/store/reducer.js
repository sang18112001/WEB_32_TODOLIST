import { ADD_TODO, DELETE_TODO, SET_TODO, COMPLETE_TODO } from "./constants";

const initialState = {
  jobs: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [],
  jobInput: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        jobInput: action.payload,
      };
    case ADD_TODO:
      const newJobs_add_todos = [
        ...state.jobs,
        { nameJob: action.payload, currentState: false },
      ];
      localStorage.setItem("todos", JSON.stringify(newJobs_add_todos));
      return {
        ...state,
        jobs: newJobs_add_todos,
      };
    case DELETE_TODO:
      const newJobs_delete_todos = [...state.jobs];
      newJobs_delete_todos.splice(action.payload, 1);
      localStorage.setItem("todos", JSON.stringify(newJobs_delete_todos));
      return {
        ...state,
        jobs: newJobs_delete_todos,
      };
    case COMPLETE_TODO:
      let newJobs_complete_todos = [...state.jobs].map((job, index) => {
        if (index === action.payload) {
          return { ...job, currentState: !job.currentState };
        }
        return job;
      });
      localStorage.setItem("todos", JSON.stringify(newJobs_complete_todos));
      return {
        ...state,
        jobs: newJobs_complete_todos,
      };
    default:
      throw new Error(`Invalid action`);
  }
};

export { initialState };
export default reducer;
