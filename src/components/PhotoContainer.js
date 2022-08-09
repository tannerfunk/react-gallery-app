import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) => {
    const results = props.data;
    let pics;


    pics = results.map(pic =>
        <Photo url={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`}
                key={pic.id} />
    );

    

    return (
        <div className="photo-container">
            <h2>Results! This is the photo container</h2>
            <ul>
                { pics }
            </ul>
        </div>
    )
}

export default PhotoContainer;