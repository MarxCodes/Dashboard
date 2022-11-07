import React, { useRef,useState } from "react";

// interface InputProps {
//   text: string
// }

// interface InputData { 
//   text:string
// }
const TaskCheckbox = () =>  (
    <div className="checkbox-conta">
      <input defaultChecked={false} type="checkbox" name="" id="" />
    </div>
  )

const TaskInput = (props) =>  {
  const inputRef = useRef<HTMLInputElement>(null);
  let [inputVal, setInputVal] = useState(props.text);
  const focusBorder = (event) => {
    inputRef.current?.focus();
  };
  
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
        value={props.text} 
        style={{
          border:"none"
        }}
        ref={inputRef}
        />
      <TaskCheckbox/>
    </div>
  )}


export default TaskInput;
