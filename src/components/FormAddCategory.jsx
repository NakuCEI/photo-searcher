import { useState } from 'react';

const FormAddCategory = ({onNewCategory}) => {

    const [search, setSearch] = useState('');
    //const [category, setCategory] = useState([]);

    const handleChange = ({target}) => {
        console.log(target);
        setSearch(target.value);
    };
    
    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log('search: ', search);
        if (search.trim().length > 0) {
            //setCategory([...category, search]);
            onNewCategory(search);
            setSearch('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='row my-5'>
            <div className='col-md-10'>
                <input 
                    type='text' 
                    id='buscar' 
                    name='buscar' 
                    placeholder='Buscar' 
                    className='form-control' 
                    onChange={handleChange} 
                    value={search} 
                />
            </div>
            <div className='d-flex justify-content-end col-md-2'>
                <button type="submit" className='btn btn-dark form-control'>Buscar</button>
            </div>
        </form>
    )
}

export default FormAddCategory
