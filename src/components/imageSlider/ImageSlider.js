import React from "react";
import ImageGallery from "react-image-gallery";
import "./ImageSlider.scss";
import {imageSlider} from "../../DrChuck";

// for testing purposes

// const image = [
//   {
//     original: 'https://picsum.photos/id/1018/1000/600/',  // original image
//     thumbnail: 'https://picsum.photos/id/1018/250/150/',  // thumbnail image
//   },
//   {
//     original: 'https://picsum.photos/id/1015/1000/600/',  // original image
//     thumbnail: 'https://picsum.photos/id/1015/250/150/',  // thumbnail image

//   }
// ]

class ImageSlider extends React.Component {
  render() {
    return (

      
      // for more customization visit https://github.com/xiaolin/react-image-gallery
      <ImageGallery
        autoPlay
        slideInterval={4000}
        slideDuration={5}
        items={imageSlider}
      />
    );
  }
}

export default ImageSlider;
