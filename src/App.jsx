import ReactDOM from "react-dom";
import { useStore } from "./store";
import { actions } from "./store";
import "./App.css";

function App() {
  const [state, dispatch] = useStore();
  const { jobInput, jobs } = state;
  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(actions.add_todo(jobInput));
    dispatch(actions.set_todo(""));
  };
  return (
    <>
      <h1>todos</h1>
      <form id="form" onSubmit={(e) => handleAddTodo(e)}>
        <input
          type="text"
          className="input"
          id="input"
          placeholder="Enter your todo"
          autoComplete="off"
          value={jobInput}
          onChange={(e) => dispatch(actions.set_todo(e.target.value))}
        />
        <ul className="todos" id="todos">
          {jobs.map((job, index) => (
            <li
              key={index}
              className={job.currentState === false ? "" : "completed"}
            >
              <p>{job.nameJob}</p>
              <i
                class="fa-solid fa-circle-check"
                onClick={() => dispatch(actions.complete_todo(index))}
              ></i>
              <i class="fa-solid fa-pen"></i>
              <i
                className="fa-solid fa-trash"
                onClick={() => dispatch(actions.delete_todo(index))}
              ></i>
            </li>
          ))}
        </ul>
      </form>

    </>
  );
}

export default App;
