import React, { useRef,useState } from "react";

interface InputProps {
  text: string
}

interface InputData { 
  text:string
}
const TaskCheckbox = () =>  (
    <div className="checkbox-conta">
      <input defaultChecked={false} type="checkbox" name="" id="" />
    </div>
  )

const TaskInput = (props: InputProps) =>  {
  const inputRef = useRef<HTMLInputElement>(null);
  let [inputVal, setInputVal] = useState(props.text);
  // inputVal = props.text;
  const focusBorder = (event: React.FocusEvent) => {
    inputRef.current?.focus();
  };
  
  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    // const enteredValue = event.target.value;
    setInputVal(event.target.value)
    // setInputVal({inputVal :enteredValue}) 
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

// TO-DO
// 