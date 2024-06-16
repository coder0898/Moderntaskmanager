import React, { useState } from "react";
import "./InputForm.css";

const InputForm = ({ setTask }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "",
    priority: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    console.log(taskData);
    setTask((prev) => {
      return [...prev, taskData];
    });
  };

  return (
    <>
      <div className="form-group">
        <input
          type="text"
          name="task"
          value={taskData.task}
          placeholder="Enter your task"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <div className="task-group">
          <select
            name="priority"
            value={taskData.priority}
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
            <option value="idea">Idea</option>
          </select>
          <select
            name="status"
            value={taskData.status}
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <option value="">Select Type</option>
            <option value="todo">Todo</option>
            <option value="working">Working</option>
            <option value="completed">Completed</option>
          </select>
          <button onClick={handleSubmit}>
            <span>
              <i className="fa-solid fa-plus"></i>
            </span>
            Add Task
          </button>
        </div>
      </div>
    </>
  );
};

export default InputForm;
