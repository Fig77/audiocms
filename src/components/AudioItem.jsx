import React, {useState} from 'react';
import ItemDetail from './ItemDetail';

const AudioItem = props => {
	const {data, edit, index} = props;
	const [editBody, setEditBody] = useState({});
	const [qaux, setAux] = useState(false);
	const [detailsOn, toggleDetails] = useState(false);
	const editQuery =`/${data.sys.id}`;
	const handleFunc = props.submit;
	const selected = props.selectRow;
	const title= data.fields.title === undefined ? 'title not found' : data.fields.title['es-MX']
    const author = data.fields.authors === undefined ? 'authors not found' : data.fields.authors['es-MX']
    const narrators = data.fields.narrators === undefined ? 'narrators not found' : data.fields.narrators['es-MX'];
    const duration = data.fields.duration === undefined ? 'duration not found' : data.fields.duration['es-MX'];

    const close = () => {
      if (detailsOn) {
        toggleDetails(false);
      } else {
        toggleDetails(true);
      }
    }

    async function deleteItem() {
    	let answer = await handleFunc('DELETE',editQuery);
    	setAux(true);
    }

	return(
		<tr className={qaux ? 'none' : ''} >
		  <td>{title}</td>
		  <td>{author}</td>
		  <td>{narrators}</td>
		  <td>{duration}</td>
		  <td><button className={`button button-blue button-sm`}  onClick = { () => close() }>Edit</button></td>
		  <td><button className={`button button-red`} onClick = {() => deleteItem() } >Delete</button></td>
		  { detailsOn === true ? <ItemDetail action="EDIT" data={data} cancel={close} /> : '' }
		</tr>);
}

export default AudioItem;