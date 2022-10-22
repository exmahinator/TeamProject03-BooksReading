import styled from 'styled-components';

const FormName = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	/* min-height: 60px; */
	font-style: normal;
	font-size: 20px;
	font-weight: 600;
	background-color: rgba(177, 181, 194, 1);
	color: white;
	text-align: center;
	max-width: 450px;
	padding: 18px 0;

	@media screen and (min-width: 768px) {
		width: 275px;

		/* margin-left: 28px;
		margin-bottom: 22px; */
	}
	@media screen and (min-width: 1280px) {
		width: 100%;
		margin: 0;
		/* padding: 0; */
		text-align: center;
	}
`;

export default FormName;
