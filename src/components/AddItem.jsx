import React, {useState, useEffect} from 'react';
import styles from './components_modules/ItemDetail.module.css';

const Item = props => {
  const [title, setTitle] = useState('');
  const [authors, setAuthor] = useState('');
  const [narrators, setNarrators] = useState('');
  const [duration, setDuration] = useState(0);
  const [cover, setCover] = useState('');
  const subm = props.submit;

  const strngConv = () => {
    let authors_array = authors.split(',');
    let narrators_array = narrators.split(',');
    return [authors_array, narrators_array];
  }

  const handleSubmit = e => {
    e.preventDefault();
    let arrdt = strngConv();
  }

  
  return(
  	<div className = {`absolute flex flex-col justify-center items-center ${styles.container}`}>
  	  <form className={`flex flex-col justify-center items-center ${styles.form}`}>
        <div>
          <label for="title">Title</label>
  	      <input type='text' name='title' />
          <label for="authors">Authors</label>
  	      <input type='text' name='authors' placeholder='author1, author2...'/>
          <label for="narrators">Narrators</label>
  	      <input type='narrators' name='narrators' placeholder='narrator1, narrator2...'/>
          <label for ='duration'>Duration</label>
  	      <input type='number' name='duration' />
          <label for='cover'>Cover link</label>
  	      <input type='text' name='cover' />
        </div>
       <label><input type="radio" name="radio" />Original</label>
  	  </form>
  	</div>
  	);
}

export default Item;