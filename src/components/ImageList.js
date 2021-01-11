import React from 'react'

const ImageList = (props) => {
    
    const imageTags = props.images.map(({ description, urls, id }) => {
        // Adding key to the root element we are returning 
        return <img alt={description} src={urls.regular} key={id}></img>
    });

    return (
        <div>{imageTags}
        </div>
    );
};

export default ImageList;