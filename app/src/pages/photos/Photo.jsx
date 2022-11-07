import React, { DragEvent, DragEventHandler, useState , useCallback} from "react";
import { Link } from "react-router-dom";
import DropZonely from "../components/Dropzone";
import ImageList from "../components/ImageList";

//


// const dragEnter = (e: DragEvent<HTMLInputElement>) => {

//   e.preventDefault();
//   console.log('enters');

// }
  //add outline class 


// const dropped: DragEventHandler<HTMLInputElement> = (e) => {
//   e.preventDefault();
//   console.log('mic DROP');

//   //add outline class 
// }
const onDrop = () => {};
// const DropzoneCard = () => (
//   <div className="wrapper" 

//   style={{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#34495E",
//     borderRadius: "14px"
//   }}>
//     <input 
//       type="file"   
//       onDragEnter={dragEnter}
//       onDrop={dropped} 
//       name="" 
//       id="" 
//       style={{width: "100%", height: "100%"}}/>
//     <h1>+</h1>
//   </div>
// ) 

export default function Photo() {
  const [images, setImages] = useState([]);
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.map(file => {
      const reader = new FileReader(); 
      reader.onload = function(e) {
        setImages(prevState => [
          ...prevState,
          { id: 'num', src: e.target?.result}
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    })
  }, [])
  return (
    <div className="wrapper" style={{display: 'flex', flexWrap: 'wrap', justifyContent: "center", alignItems: "center"}}>
      <h1>Hello welcome to photos</h1>

      <div className="card-container"
          style={{
            display: "flex",
            flexWrap: "wrap",

          }}>
        <DropZonely onDrop={onDrop} accept={'.jpeg, .png'}/>
        <ImageList images={images} style={{height:280, width: 280}}/>

        <div className="card" 
             style={{
              backgroundColor: "#34495E",
              borderRadius: "14px",
              height: 280,
              width: 280
             }}>
        </div>
        <div className="card" 
             style={{
              backgroundColor: "#34495E",
              borderRadius: "14px",
              height: 280,
              width: 280
             }}>
        </div>
        <div className="card" 
             style={{
              backgroundColor: "#34495E",
              borderRadius: "14px",
              height: 280,
              width: 280
             }}>
        </div>
        <div className="card" 
             style={{
              backgroundColor: "#34495E",
              borderRadius: "14px",
              height: 280,
              width: 280
             }}>
        </div>
      </div>
    </div>
  )
}