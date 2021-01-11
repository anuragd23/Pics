import React from 'react'

const ImageList = (props) => {
    
    const imageTags = props.images.map(image => {
        return <img alt='' src={image.urls.regular}></img>
    });

    return (
        <div>{imageTags}
        </div>
    );
};

export default ImageList;