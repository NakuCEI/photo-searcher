import { useFetchPhotos } from "../hooks/useFetchPhotos"
import GridCard from "./GridCard";
const loadingImg = '../../img/loading-gif.gif';

export const GridCategory = ({category}) => {
    
    const {photosCategory, isLoading} = useFetchPhotos(category);

    return (
        <section>
            <h2>{category}</h2>
            <div className="row">
                {
                    isLoading ? 
                        (
                            <div className="d-flex justify-content-center">
                                <img src={loadingImg} alt='Loading' />
                            </div>
                        ) 
                        : (
                            photosCategory.map(photo => (
                                <GridCard key={photo.id} photo={photo} />
                            ))
                        )
                }
            </div>
        </section>
    )
};
