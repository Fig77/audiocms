import React, {useState} from 'react';
import ItemDetail from './ItemDetail';

const AudioItem = props => {
	const {data, edit, index} = props;
	const [editBody, setEditBody] = useState({});
	const [detailsOn, toggleDetails] = useState(false);
	const editQuery =`/${data.sys.id}`;
	const title= data.fields.title === undefined ? 'title not found' : data.fields.title['es-MX']
    const author = data.fields.authors === undefined ? 'authors not found' : data.fields.authors['es-MX']
    const narrators = data.fields.narrators === undefined ? 'narrators not found' : data.fields.narrators['es-MX'];


    const close = () => {
      if (detailsOn) {
        toggleDetails(false);
      } else {
        toggleDetails(true);
      }
    }

	return(
		<tr className=''>
		  <td>{title}</td>
		  <td>{author}</td>
		  <td>{narrators}</td>
		  <td><button onClick = { () => close() }>Edit</button></td>
		  <td>Delete</td>
		  { detailsOn === true ? <ItemDetail action="EDIT" data={data} cancel={close} /> : '' }
		</tr>);
}

export default AudioItem;