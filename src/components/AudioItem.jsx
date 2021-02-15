import React from 'react';

const AudioItem = props => {
	const {title, author, narrator} = props;

	return(
		<tr>
		  <td>{title}</td>
		  <td>{author}</td>
		  <td>{narrator}</td>
		</tr>);
}

export default AudioItem;