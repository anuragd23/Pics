import React from 'react'
import ImageCard from './ImageCard'
import './ImageList.css'

const ImageList = (props) => {
    
    const imageTags = props.images.map(image => {
        // Adding key to the root element we are returning 
        return <ImageCard key={image.id} image={image}></ImageCard>
    });

    return (
        <div className="image-list">
            {imageTags}
        </div>
    );
};

export default ImageList;