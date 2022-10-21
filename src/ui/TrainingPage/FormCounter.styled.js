import styled from 'styled-components';

const FormCounter = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: 768px) {
		gap: 40px;
		margin-right: 52px;
	}
	@media screen and (min-width: 1280px) {
		margin-right: 0;
		gap: 20px;
	}
`;

export default FormCounter;
