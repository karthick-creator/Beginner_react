import React from 'react'

const Footer = () => {
	const year = new Date();
	
	return(
		<footer>copy right &copy; {year.getFullYear()}</footer>
	);
}

export default Footer