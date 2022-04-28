import React from 'react';
import '../Styles/imagelist.css';

const ImageList = ({ pictures, text }) => {
  const display = pictures.filter((allPics) => {
    // console.log(allPics.name.);
    return allPics.name.toLowerCase().includes(text);
  });

  return (
    <div className="body-container">
      {display.map((pics) => {
        return (
          <div key={pics.id} className="child-container">
            <h2>{pics.name}</h2>
            <img src={pics.image} alt={pics.name} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
