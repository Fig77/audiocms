import React, {useState} from 'react';
import styles from './components_modules/SearchField.module.css';

const SearchField = props => {
    const [searchQuery, setQuery] = useState('');
    const handleFunc = props.submit;

    const submitSearch = (e) => {
    	e.preventDefault();
    	handleFunc('GET','',searchQuery)
    }

	return (
	  <form onSubmit = {(e) => submitSearch(e)} >
		  <input className={`${styles.searchinput} ${styles.inputfont}`} type='text' onChange = {e => setQuery(e.target.value)} value={searchQuery}/>
		  <button type='submit' className="button button-blue" >Submit</button>
	  </form>
	);
}

export default SearchField;