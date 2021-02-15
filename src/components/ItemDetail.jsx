import React, {useState} from 'react';

const Book = props => {
  const action = props.action;
  const handleSubmit = props.submit;
  const data = props.data;
  const [disabled, setDisable] = useState(false);
  const [id, setId] = useState(0);

  if(action !== 'NEW') {
    setDisable(true);
  } else {
    setId(props.id);
  }

  const onCancel = () => {
    props.cancel(false);
  }

  return(
    <div>
      <div>
  	    <form>
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
           <button onClick={() => onCancel }>Cancel</button>
         </div>
  	  </form>
  	</div>
  </div>
  );
}

export default Book;