import React from 'react'
import './ImageList.css'

const ImageList = (props) => {
    
    const imageTags = props.images.map(({ description, urls, id }) => {
        // Adding key to the root element we are returning 
        return <img alt={description} src={urls.regular} key={id}></img>
    });

    return (
        <div className="image-list">
            {imageTags}
        </div>
    );
};

export default ImageList;