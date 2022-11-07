interface InputProps {
  text: string
}

const TestTasky = (props: InputProps) =>  (
    <div className="container">

    <h1>
      TEST TARSKY;
    </h1>
    <div className="message">
      {props.text}
      
    </div>
    </div>
  )


export default TestTasky;