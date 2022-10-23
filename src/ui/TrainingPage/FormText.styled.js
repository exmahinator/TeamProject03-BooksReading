import styled from 'styled-components';

const FormText = styled.p`
	display: flex;
	/* width: 100px; */
	/* font-family: 'Montserrat'; */
	font-style: normal;
	font-weight: 500;
	font-size: 11px;
	line-height: 1.21;
	text-align: center;
	color: #898f9f;
	justify-content: center;
	flex-direction: column;
	margin: 0;


	@media screen and (min-width: 768px) {
		font-weight: 500;
		font-size: 11px;
		margin-top: 4px;
		margin-bottom: 8px;
	}
	@media screen and (min-width: 1280px) {
		width: 100px;
		/* font-family: 'Montserrat'; */
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		margin-top: 0;
		margin-bottom: 0;
	}
`;

export default FormText;
