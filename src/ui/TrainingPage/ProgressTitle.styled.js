import styled from 'styled-components';

const ProgressTitle = styled.h2`
	display: flex;
	text-align: center;
	justify-content: center;
	font-weight: 600;
	font-size: 20px;
	line-height: 1.2;
	padding: 18px 30px;
	width: 100%;
	color: #ffffff;
	background-color: #b1b5c2;
	box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
	@media screen and (min-width: 768px) {
		padding: 18px 27px;
	}
	@media screen and (min-width: 1280px) {
		padding: 18px 34px;
	}
`;

export default ProgressTitle;
