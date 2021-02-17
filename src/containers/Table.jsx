import React, {useState, useEffect} from 'react';
import AudioItem from '../components/AudioItem';

const Table = props => {
	const data = props.tableData;
	const submit = props.submit;
	const selectRow = props.selectItem;

	const tableRow = (i) => {
	  return(<AudioItem key={data[i].sys.id} data={data[i]} index={i} submit={submit}/>)
	}

	const drawAll = () => {
		let i = 0;
		let tableitems = [];
		while (i < data.length) {
		  tableitems[i] = (tableRow(i));
		  i += 1;
		}
		return tableitems;
	}

	useEffect(() => {
	}, [data.length])


	return(
	  <table key='uniq-table-12'>
	    <thead>
	      <tr>
	        <th>Title</th>
	        <th>Author</th>
	        <th>Narrator</th>
	        <th>Duration</th>
	      </tr>
	    </thead>
	    <tbody>
	      {data.length === 0 ? <tr><td>No audiobooks to show</td></tr> : drawAll() }
	    </tbody>
	  </table>
	);
}

export default Table;