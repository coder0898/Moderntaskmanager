import { useState } from "react";
import "./App.css";
import InputForm from "./component/Form/InputForm";
import Header from "./component/Header/Header";
import Sections from "./component/Sections/Sections";

function App() {
  const [task, setTask] = useState([]);
  // console.log(task);

  const handleDelete = (taskIndex) => {
    const newtask = task.filter((item, index) => index !== taskIndex);
    setTask(newtask);
  };

  return (
    <>
      <Header />
      <main>
        <InputForm setTask={setTask} />
        <div className="list-container">
          <Sections
            headTitle="Todo"
            task={task}
            status="todo"
            handleDelete={handleDelete}
          />
          <Sections
            headTitle="Working"
            task={task}
            status="working"
            handleDelete={handleDelete}
          />
          <Sections
            headTitle="Compeleted"
            task={task}
            status="completed"
            handleDelete={handleDelete}
          />
        </div>
      </main>
    </>
  );
}

export default App;
