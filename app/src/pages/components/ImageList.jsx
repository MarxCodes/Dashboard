import React from "react";

// Rendering individual images
// interface Image {
//   src: string
// }
const Image = ({ image }) => {
  return (
    <div className="file-item" >
      <img alt="" src={image.src} className="file-img" style={{height: 280, width: 280}}/>
    </div>
  );
};

// ImageList Component
const ImageList = ({ images })  => {

  // render each image by calling Image component
  const renderImage = (image) => {
    return (
      <Image
        image={image}
        key={`image9`}
      />
    );
  };

  return <section className="file-list">{images.map(renderImage)}</section>;
};

export default ImageList;