import React, { useState } from 'react';
import SearchField from '../components/SearchField';
import Table from './Table';
import request from '../api/audioApi';



const Main = () => {
  const getAll = "?select=fields,sys.id,sys.version&locale=es-MX";
  const [data, setData] = useState(undefined);
  const [itemDetail, setItemDetail] = useState(false);

  async function submit(value = ''){
    let dat = undefined;
    if(value === '') {
	    dat = await request('GET',getAll); // Default query if empty return all
	  } else {
	  	const query = `?query=${value}&select=fields,sys.id&locale=es-MX`;
	    dat = await request('GET', query);
    }
    setData(dat.items);
  }

  async function add(audio_model) {
    let dat = undefined;
    dat = await request('POST', audio_model);
  }

	return(
	 <div class='relative'>
     { itemDetail ? <ItemDetail action='NEW' cancel={setItemDetail}/> : null }
     <div class='flex'>
	     <SearchField submit={submit}/>
       <button onClick={setItemDetail(true)}>New Book</button>
     </div>
	   <Table tableData = {data} newSubmit = {add} />
	 </div>
	 );
}

export default Main;