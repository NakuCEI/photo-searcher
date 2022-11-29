import React from 'react'

const GridCard = ({photo}) => {

    const {id, url, alt, author} = photo;
    console.log('id: ', id);
    console.log('url: ', url);
    console.log('alt: ', alt);
    console.log('author: ', author);

    return (
        <article id={id} className='card col-md-4'>
            <div className='card-body'>
                <h3>{author}</h3>
            </div>
            <img src={url} alt={alt} />
        </article>
    )
};

export default GridCard
