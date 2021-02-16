import React, {useState, useEffect} from 'react';
import styles from './components_modules/ItemDetail.module.css';
import bookMd from '../api/audiobook_model';

const ItemDetail = props => {
  const action = props.action;
  const cancel = props.cancel;
  const handleSubmit = props.submit;
  const data = props.data;
  const [disabled, setDisable] = useState(true);
  const [id, setId] = useState(0);
  const [formValues, setFormValues] = useState(['','','',0,0,'',false,'2011-05-06']);
  const [init, setInit] = useState(false);

  const setInitial = () => {
    let authors =  data.fields.authors['es-MX'].join(',');
    let narrators =  data.fields.narrators['es-MX'].join(',');
    let auxiliarArray = [...formValues]
    auxiliarArray[0] = data.fields.title['es-MX'];
    auxiliarArray[1] = authors;
    auxiliarArray[2] = narrators;
    auxiliarArray[3] = data.fields.duration['es-MX'];
    auxiliarArray[4] = data.fields.cost_per_play['es-MX'];
    auxiliarArray[5] = data.fields.cover['es-MX'];
    auxiliarArray[6] = data.fields.is_original['es-MX'];
    auxiliarArray[7] = data.fields.street_date['es-MX'];
    setFormValues(auxiliarArray);
  }


  useEffect(() => {
    if(init === false) {
      if(action !== "NEW") {
        setDisable(false);
        setInitial();
      }
      setInit(true);
    }
  }, []);

  const editForm = (i, e) => {
    let auxiliarArray = [...formValues];
    auxiliarArray[i] = e.target.value;
    setFormValues(auxiliarArray);
  }

  const submitForm = (e) => {
    e.preventDefault();
    bookMd.init(formValues);
    console.log(bookMd.getBody());

  }

  const close = () => {
    cancel();
  }

  return(
      <div className = {`absolute flex flex-col justify-center items-center ${styles.container}`}>
  	    <form className={`flex flex-col justify-center items-center ${styles.form}`} onSubmit = { (e) => submitForm(e) }>
          <div>
            <label for="title">Title</label>
  	        <input type='text' onChange={(e) => editForm(0,e) } name='title'  value = {formValues[0]} disabled={disabled}/>
            <label for="authors">Authors</label>
  	        <input type='text' onChange={(e) => editForm(1,e)} name='authors' placeholder='author1, author2...' disabled={disabled} value = {formValues[1]} />
            <label for="narrators">Narrators</label>
  	        <input type='narrators' onChange={(e) => editForm(2,e)} name='narrators' value={formValues[2]} placeholder='narrator1, narrator2...' disabled={disabled}/>
            <label for ='duration'>Duration</label>
  	        <input type='number' onChange={(e) => editForm(3,e)} name='duration' value={formValues[3]}  disabled={disabled}/>
            <label for='cost_per_play'>Cost per play</label>
            <input type='number' onChange={(e) => editForm(4,e)} name='cost_per_play' value={formValues[4]} placeholder='0' disabled={disabled}/>
            <label for='cover'>Cover link</label>
  	        <input type='text' onChange={(e) => editForm(5,e)} name='cover' value={formValues[5]}  disabled={disabled}/>
          </div>
         <label><input type="checkbox" onChange={(e) => editForm(6,e)} name="checkbox" checked={formValues[6]} disabled={disabled}/>Original</label>
         <div>
           <button type='submit' disabled={disabled}>Save</button>
         </div>
  	  </form>
       <button onClick={() => close() }>Cancel</button>
  	</div>
  );
}

export default ItemDetail;