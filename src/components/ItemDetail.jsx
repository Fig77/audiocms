import React, {useState} from 'react';
import styles from './components_modules/ItemDetail.module.css';

const ItemDetail = props => {
  const action = props.action;
  const cancel = props.cancel;
  const handleSubmit = props.submit;
  const data = props.data;
  const [disabled, setDisable] = useState(false);
  const [id, setId] = useState(0);

  const close = () => {
    console.log('TEST');
    cancel();
  }

  return(
      <div className = {`absolute flex flex-col justify-center items-center ${styles.container}`}>
  	    <form className={`flex flex-col justify-center items-center ${styles.form}`}>
          <div>
            <label for="title">Title</label>
  	        <input type='text' name='title'  disabled={disabled}/>
            <label for="authors">Authors</label>
  	        <input type='text' name='authors' placeholder='author1, author2...' disabled={disabled}/>
            <label for="narrators">Narrators</label>
  	        <input type='narrators' name='narrators' placeholder='narrator1, narrator2...' disabled={disabled}/>
            <label for ='duration'>Duration</label>
  	        <input type='number' name='duration'  disabled={disabled}/>
            <label for='cover'>Cover link</label>
  	        <input type='text' name='cover'  disabled={disabled}/>
          </div>
         <label><input type="radio" name="radio"  disabled={disabled}/>Original</label>
         <div>
           <button type='submit' disabled={disabled}>Save</button>
         </div>
  	  </form>
       <button onClick={() => close() }>Cancel</button>
  	</div>
  );
}

export default ItemDetail;