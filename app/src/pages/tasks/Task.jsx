import React, {useState} from "react";


const TaskCheckbox = () =>  (
    <div className="checkbox-container">
      <input defaultChecked={false} type="checkbox" name="" id="" />
    </div>
  )

const taskTests = [
  {text: 'primary test task'},
  {text: 'secondary test task'},
  {text: 'final test task'}
]
export const TaskInput = (props) => {
  let [inputVal, setInputVal] = useState(props.text);
  const handleSubmit = (event) => {
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



export default {Tasks, TaskInput}

// interface InputProps {
//   text: string
// }

// interface InputData { 
//   text:string
// }
// export const TaskInput = (props: InputProps) => {
//   let [inputVal, setInputVal] = useState(props.text);
//   const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
//     event.preventDefault();
//     setInputVal(event.target.value)
//   }