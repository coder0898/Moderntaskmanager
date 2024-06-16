import { useState } from "react";
import "./App.css";
import InputForm from "./component/Form/InputForm";
import Header from "./component/Header/Header";
import Sections from "./component/Sections/Sections";

function App() {
  const [task, setTask] = useState([]);
  // console.log(task);
  return (
    <>
      <Header />
      <main>
        <InputForm setTask={setTask} />
        <div className="list-container">
          <Sections headTitle="Todo" task={task} status="todo" />
          <Sections headTitle="Working" task={task} status="working" />
          <Sections headTitle="Compeleted" task={task} status="completed" />
        </div>
      </main>
    </>
  );
}

export default App;
