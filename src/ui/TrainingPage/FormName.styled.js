import styled from 'styled-components';

const FormName = styled.div`
	margin: 0;
    width: 100%;
	height: 60px;
	font-family: 'Montserrat';
	font-style: normal;
	font-size: 20px;
	font-weight: 600;
	font-family: inherit;
	background-color: rgba(177, 181, 194, 1);
	color: white;
	text-align: center;

	@media screen and (min-width: 768px) {
		width: 275px;
		margin-left: 28px;
		margin-bottom: 22px;

	}
	@media screen and (min-width: 1280px) {
		width: 100%;
		margin: 0;
		text-align: center;
		

	}
`;

export default FormName;
