import React from 'react';

interface InputProps {
  text: string
}

const TaskCheckbox = () =>  (
  <div className="checkbox-conta">
    <input defaultChecked={false} type="checkbox" name="" id="" />
  </div>
)


class TaskInputty extends React.Component {
  // state = { userName: '', poopeties: this.props };

  // handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  // }

  // render() {
  //   const profile = this.props;
  //   return (
  //     <div style={{
  //       display: "flex",
  //       flexDirection: 'row'
  //     }}>

  //       <input 
  //         className="task-input" 
  //         type="text" 
  //         value={profile.text} 
  //         onChange={e => this.setState({username:e.target.value})} 
  //         style={{
  //           border:"none"
  //         }}
  //         name="" 
  //         id="" 
  //         />
  //       <TaskCheckbox/>
  //     </div>
  //   )
  // }
}

export default TaskInputty;