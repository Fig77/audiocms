import React, { useState } from 'react';
import SearchField from '../components/SearchField';
import Table from './Table';
import ItemDetail from '../components/ItemDetail';
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
    if(dat !== undefined){
      setData(dat.items);
    }
  }

  const close = () => {
    if (itemDetail) {
      setItemDetail(false);
    } else {
      setItemDetail(true);
    }
  }

	return(
	 <main className='main relative w-full flex flex-col justify-center'>
     { itemDetail ? <ItemDetail action='POST' cancel={close}/> : '' }
     <div className='flex items-center'>
	     <SearchField submit={submit}/>
     </div>
     <div className='flex items-center'>
      <button className='button button-blue button-md' onClick={() => close() }>New Book</button>
      <button className='button button-red button-md' onClick={() => setData(undefined)}>Clear</button>
     </div>
	   <Table tableData = {data} />
	 </main>
	 );
}

export default Main;