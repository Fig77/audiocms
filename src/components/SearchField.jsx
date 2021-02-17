import React, {useState} from 'react';
import styles from './components_modules/SearchField.module.css';

const SearchField = props => {
    const [searchQuery, setQuery] = useState('');
    const [getId, setGetid] = useState(false);
    const handleFunc = props.submit;

    const submitSearch = (e) => {
    	e.preventDefault();
    	if(getId === true) {
    	  handleFunc('GET',`?sys.id=${searchQuery}&select=fields,sys.id&locale=es-MX`,'');
    	} else {
          handleFunc('GET','',searchQuery)
    	}
    }

	return (
	  <form onSubmit = {(e) => submitSearch(e)} >
		  <input className={`${styles.searchinput} ${styles.inputfont}`} type='text' onChange = {e => setQuery(e.target.value)} value={searchQuery}/>
		  <button type='submit' className="button button-blue" >Search</button>
		  <label><input type='checkbox' onClick={() => setGetid(!getId) } />Search by ID</label>
	  </form>
	);
}

export default SearchField;