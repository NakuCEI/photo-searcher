import { useEffect, useState } from "react";
import { ConsultaPexels } from "../api/ConsultaPexels";

export const useFetchPhotos = (category) => {
    const [photosCategory, setPhotosCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async() => {
        const {photos} = await ConsultaPexels(category);
        const newPhotos = photos.map(photo => (
            {
                id: photo.id, 
                url: photo.src.medium, 
                alt: photo.alt, 
                author: photo.photographer, 
                author_url: photo.photographer_url
            }
        ));
        console.log('newPhotos: ', newPhotos);
        setPhotosCategory(newPhotos);
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    return {
        photosCategory, 
        isLoading
    };
};