import { useState } from "react";
import FormAddCategory from "./FormAddCategory"
import { GridCategory } from "./GridCategory";


export const Galeria = () => {

    const [categories, setCategories] = useState([]);
    
    const onNewCategory = (newCategory) => {
        console.log('newCategory: ', newCategory);
        console.log('categories: ', categories);
        const encontrada = categories.find(item => item.toLowerCase() === newCategory.toLowerCase());
        
        if (!encontrada) {
            setCategories(categories => [...categories, newCategory]);
            //setCategories(newCategory, ...categories);
        }
    };

    return (
        <>
            <h1>Buscador de fotos</h1>
            <div>
                <FormAddCategory onNewCategory={onNewCategory} />
            </div>
            <div>
                <h1>Categoría</h1>
                {
                    categories.map(category => (
                        <GridCategory key={category} category={category} />
                    ))
                }
            </div>
        </>
    )
};
