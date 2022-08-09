import React from 'react';
import Photo from './Photo';
import {useParams} from 'react-router-dom';
import NotFound from './NotFound';

const PhotoContainer = (props) => {
    const results = props.data;
    let pics;

    const { query } = useParams();

//if the query from before and the query we have in the search window are different send for more data through this passed down function!
    if (props.query !== query){
        props.performSearch(query);
    } 

    if(results.length > 0) {
        //iterate through all the data as "pic" and put it into the pics array
        pics = results.map(pic =>
            <Photo url={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`}
                    key={pic.id} />
        );
    } else {
        pics = <NotFound />
    }


    return (
        //throw the pics array with all the data we need to the screen!
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                { pics }
            </ul>
        </div>
    )
}

export default PhotoContainer;