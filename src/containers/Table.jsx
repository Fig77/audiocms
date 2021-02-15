import React from 'react';
import AudioItem from '../components/AudioItem';

const Table = props => {
	const data = props.tableData;
	const newItem = props.newSubmit;

	const tableRow = (i) => {
  		let title= data[i].fields.title === undefined ? 'title not found' : data[i].fields.title['es-MX']
  		let author = data[i].fields.authors === undefined ? 'authors not found' : data[i].fields.authors['es-MX']
  		let narrators = data[i].fields.narrators === undefined ? 'narrators not found' : data[i].fields.narrators['es-MX'];

		return(<AudioItem title={title} author={author} narrator={narrators}/>)
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
	      </tr>
	    </thead>
	    <tbody>
	      {data === undefined ? <tr><td>No audiobooks to show</td></tr> : drawAll()}
	    </tbody>
	  </table>
	);
}

export default Table;