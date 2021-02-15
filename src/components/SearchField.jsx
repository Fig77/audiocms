import React, {useState} from 'react';

const SearchField = props => {
    const [searchQuery, setQuery] = useState('');
    const handleFunc = props.submit;

	return (
	  <form onSubmit = {(e) => {e.preventDefault(); handleFunc(searchQuery)}} >
		  <input type='text' onChange = {e => setQuery(e.target.value)} value={searchQuery}/>
		  <button type='submit' >Submit</button>
	  </form>
	);
}

export default SearchField;