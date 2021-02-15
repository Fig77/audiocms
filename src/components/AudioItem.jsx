import React from 'react';

const AudioItem = props => {
	const {title, author, narrator, editCall, deleteCall} = props;
	

	return(
		<tr>
		  <td>{title}</td>
		  <td>{author}</td>
		  <td>{narrator}</td>
		  <td>Edit</td>
		  <td>Delete</td>
		</tr>);
}

export default AudioItem;