import styled from 'styled-components';

const FormNumber = styled.div`
	display: flex;
	/* font-family: 'Open Sans'; */
	width: 63px;
	height: 63px;
	font-style: normal;
	font-weight: 700;
	font-size: 40px;
	color: #091e3f;
	justify-content: center;
	align-items: center;

	/* &:last-child {
    color: #FF6B08;
} */

	@media screen and (min-width: 768px) {
		width: 100px;
		height: 60px;
	}
	@media screen and (min-width: 1280px) {
		width: 66px;
		height: 66px;
	}
`;

export default FormNumber;
