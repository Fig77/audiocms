import React, { useState } from 'react';
import SearchField from '../components/SearchField';
import Table from './Table';
import ItemDetail from '../components/ItemDetail';
import request from '../api/audioApi';
import { toast } from 'react-toastify';




const Main = () => {
  const [data, setData] = useState([]);
  const [itemDetail, setItemDetail] = useState(false);
  const [selectedId, setSelected] = useState(-1);
  const [selectedIndex, setIndex] = useState(-1);
  const [loading, setLoading] = useState(false);

  const optionModal = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  }

  async function submit(action, hostconcat = '',query='', body={}){
    setLoading(true);
    if(action === 'GET') {
      hostconcat = `?query=${query}&select=fields,sys.id&locale=es-MX`
      if(query === '') {
        hostconcat = "?select=fields,sys.id,sys.version&locale=es-MX";
      }
      const answer = await request(action, hostconcat, body);
       if(answer.sys.type !== 'Error') {
          setData(answer.items);
          toast.success('Success', optionModal);
        } else {
          toast.error('There has been an error: '.concat(answer.message), optionModal);
        }
      }
      else {
      const answer = await request(action, hostconcat.concat(query), body);
    }
    setLoading(false);
  }

  const close = () => {
    if (itemDetail) {
      setItemDetail(false);
    } else {
      setItemDetail(true);
    }
  }

  const selectItem = (index, itemid) => {
    setSelected(itemid);
    setIndex(index);
  }

	return(
	 <main className='main relative w-full flex flex-col justify-center'>
     { itemDetail ? <ItemDetail action='POST' cancel={close}/> : '' }
     <div className='flex items-center'>
	     <SearchField submit={submit}/>
     </div>
     <div className='flex items-center'>
      <button className='button button-blue button-md' onClick={() => close() }>New Book</button>
      <button className='button button-red button-md' onClick={() => setData([])}>Clear</button>
     </div>
	   <Table tableData = {data} selectItem = {selectItem} submit = {submit}/>
	 </main>
	 );
}

export default Main;