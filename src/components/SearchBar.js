import React, {useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        // default behavior is app re renders and value of input is deleted
        // to prevent that we use preventDefault
        event.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" 
                    onChange={(e)=> setTerm(e.target.value)}
                    value={term}/>
                </div>
            </form>
        </div>
    )

}

export default SearchBar; 