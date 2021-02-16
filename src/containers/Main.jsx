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
	 <div class='relative w-full flex flex-col justify-center'>
     { itemDetail ? <ItemDetail action='POST' cancel={close}/> : '' }
     <div class='flex'>
	     <SearchField submit={submit}/>
       <button onClick={() => close() }>New Book</button>
       <button onClick={() => setData(undefined)}>Clear</button>
     </div>
	   <Table tableData = {data} />
	 </div>
	 );
}

export default Main;