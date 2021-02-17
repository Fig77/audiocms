import React from 'react';
import AudioItem from '../components/AudioItem';

const Table = props => {
	const data = props.tableData;
	const newItem = props.newSubmit;
	const selectRow = props.selectRow;

	const tableRow = (i) => {
	  return(<AudioItem data={data[i]} edit={rowSelect} index={i} />)
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

	const rowSelect = (i) => {
		selectRow(i)
	}

	const submission = model => {
		newItem(model);
	}

	return(
	  <table>
	    <thead>
	      <tr>
	        <th>Title</th>
	        <th>Author</th>
	        <th>Narrator</th>
	        <th>Duration</th>
	      </tr>
	    </thead>
	    <tbody>
	      {data === undefined ? <tr><td>No audiobooks to show</td></tr> : drawAll()}
	    </tbody>
	  </table>
	);
}

export default Table;