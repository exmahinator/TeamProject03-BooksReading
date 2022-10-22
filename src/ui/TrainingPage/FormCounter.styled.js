import styled from 'styled-components';

const FormCounter = styled.div`
	display: flex;
	justify-content: space-between;
	text-align: center;
	/* justify-content: center; */
	align-items: center;
	padding: 32px 29px;
	width: 228px;

	@media screen and (min-width: 768px) {
		width: 350px;
		align-items: baseline;
		padding: 0;
	}

	@media screen and (min-width: 1280px) {
		width: 260px;
		padding: 80px 18px;
	}
`;

export default FormCounter;
