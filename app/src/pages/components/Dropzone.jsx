import React from "react";
import { useDropzone } from "react-dropzone";

const DropZonely = ({onDrop, accept}) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });

  return (
    <div {...getRootProps()}>
      <input type="file" {...getInputProps()} />
      <div>
        {
          isDragActive ? (
            <p>release to drop files here</p>
          ) : (
            <p>Drag and drop files here, or click to select files</p>
          )
        }
      </div>
    </div>
  )
};

export default DropZonely;