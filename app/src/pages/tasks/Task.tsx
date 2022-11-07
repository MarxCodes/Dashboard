import React, {useState} from "react";
import { Link } from "react-router-dom";
// import TaskInput from "../components/TaskInput";
// import TestTasky from "../components/TestTask";
// import TaskInputty from "../components/TaskInputs";
interface InputProps {
  text: string
}

interface InputData { 
  text:string
}
const TaskCheckbox = () =>  (
    <div className="checkbox-container">
      <input defaultChecked={false} type="checkbox" name="" id="" />
    </div>
  )

export const TaskInput = (props: InputProps) => {
  // const inputRef = useRef<HTMLInputElement>(null);
  let [inputVal, setInputVal] = useState(props.text);
  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputVal(event.target.value)
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: 'row'
    }}>
      <input 
        onChange={handleSubmit} 
        className="task-input" 
        type="text" 
        value={inputVal} 
        style={{
          border:"none"
        }}
        name={props.text}
        id={props.text + '-id'}
        />
      <TaskCheckbox/>
    </div>
  )}


const Tasks = () => {
const [tasks, setTasks] = useState(taskTests);

  return (
    <div className="wrapper" style={{display: 'flex', flexWrap: 'wrap', justifyContent: "center", alignItems: "center"}}>
        <h1>Hello welcome to tasks</h1>
      <div>
      tasks: {tasks.map(i => {
      return <TaskInput key={i.text} text={i.text}/>
    }
    )}
      </div>
      <div>

    </div>

    </div>
    
  )
}

// const taskTests = [
//   'primary test task',
//   'secondary test task',
//   'final test task'
// ]

const taskTests = [
  {text: 'primary test task'},
  {text: 'secondary test task'},
  {text: 'final test task'}
]

export default {Tasks, TaskInput}