import React, {useState, useEffect} from 'react';
import styles from './components_modules/ItemDetail.module.css';
import bookMd from '../api/audiobook_model';
import request from '../api/audioApi';

const ItemDetail = props => {
  const action = props.action;
  const cancel = props.cancel;
  const data = props.data;
  const handleSubmit = props.submit;
  const datePlaceholder = new Date();
  const [disabled, setDisable] = useState(false);
  const [id, setId] = useState(0);
  const [checkbox, toggleCh] = useState(false);
  const [formValues, setFormValues] = useState(['','','',0,0,'',false, datePlaceholder.toISOString()]);
  const [init, setInit] = useState(false);
  const [objectId, setObjectid] = useState('');

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
      if(action !== "POST") {
        setInitial();
      }
      setInit(true);
    }
  }, []);

  const editForm = (i, e) => {
    let auxiliarArray = [...formValues];
    auxiliarArray[i] = e.target.value;
    if(i  === 6) {
      if(checkbox) {
        toggleCh(false);
        auxiliarArray[i] = false;
      } else {
        toggleCh(true);
        auxiliarArray[i] = true;
      }
    }
    setFormValues(auxiliarArray);
  }

  async function submitForm(e) {
    e.preventDefault();
    let answer = undefined;
    bookMd.init(formValues);
    let bodydata = bookMd.getBody();
    if(action === 'POST') {
      answer = await request(action,'',{body:JSON.stringify(bodydata)}); 
    } else if(action === 'PUT'){
       //
    }
    console.log(answer);
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