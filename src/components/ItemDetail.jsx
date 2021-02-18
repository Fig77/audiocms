import React, {useState, useEffect} from 'react';
import styles from './components_modules/ItemDetail.module.css';
import bookMd from '../api/audiobook_model';

const ItemDetail = props => {
  const action = props.action;
  const cancel = props.cancel;
  const data = props.data;
  const handleSubmit = props.submit;
  const datePlaceholder = new Date();
  const disabled = false;
  const [checkbox, toggleCh] = useState(false);
  const [formValues, setFormValues] = useState(['','','',0,0,'',false, datePlaceholder.toISOString()]);
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
      if(action !== "POST") {
        setInitial();
      }
      setInit(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    bookMd.init(formValues);
    let bodydata = bookMd.getBody();
    if(action === 'POST') {
      handleSubmit(action,'','',{body:JSON.stringify(bodydata)});
    } else if(action === 'PUT'){
      handleSubmit(action, `/${data.sys.id}`, '',{body:JSON.stringify(bodydata)}, {'X-Contentful-Version': `${data.sys.version !== undefined ? data.sys.version : 1}`})
    }
  }

  const close = () => {
    cancel();
  }

  return(
      <div className = {`flex flex-col justify-center items-center ${styles.container}`}>
  	    <form className={`flex flex-col justify-center  ${styles.form}`} onSubmit = { (e) => submitForm(e) }>
           <div className='flex justify-around'>
              <label className='flex items-center' forHTML="title">Title</label> 
  	          <input className={`${styles.formInput}`}type='text' onChange={(e) => editForm(0,e) } name='title'  value = {formValues[0]} disabled={disabled}/>
            </div>
            <div className='flex justify-around'>
              <label className='flex items-center' for="authors">Authors</label>
  	          <input className={`${styles.formInput}`} type='text' onChange={(e) => editForm(1,e)} name='authors' placeholder='author1, author2...' disabled={disabled} value = {formValues[1]} />
            </div>
            <div className='flex justify-around'>
              <label className='flex items-center' for="narrators">Narrators</label>
  	          <input className={`${styles.formInput}`} type='narrators' onChange={(e) => editForm(2,e)} name='narrators' value={formValues[2]} placeholder='narrator1, narrator2...' disabled={disabled}/>
            </div>
            <div className='flex justify-around'>
              <label className='flex items-center' for ='duration'>Duration</label>
  	          <input className={`${styles.formInput}`} type='number' onChange={(e) => editForm(3,e)} name='duration' value={formValues[3]}  disabled={disabled}/>
            </div>
            <div className='flex justify-around'>
              <label className='flex items-center' for='cost_per_play'>Cost per play</label>
              <input className={`${styles.formInput}`} type='number' onChange={(e) => editForm(4,e)} name='cost_per_play' value={formValues[4]} placeholder='0' disabled={disabled}/>
            </div>
            <div className='flex justify-around'>
              <label className='flex items-center' for='cover'>Cover link</label>
  	          <input className={`${styles.formInput}`} type='text' onChange={(e) => editForm(5,e)} name='cover' value={formValues[5]}  disabled={disabled}/>
            </div>
         <label className='self-end'><input type="checkbox" onChange={(e) => editForm(6,e)} name="checkbox" checked={formValues[6]} disabled={disabled}/>Original</label>
           <div className=''>
             <button className='button button-green' type='submit' disabled={disabled}>Save</button>
             <button className='button button-red' onClick={() => close() }>Cancel</button>
           </div>
  	  </form>
  	</div>
  );
}

export default ItemDetail;