import styled from 'styled-components';

const FormCounterBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: 44px 10px;

	@media screen and (min-width: 768px) {
		margin: 0;
	}
	@media screen and (min-width: 1280px) {
		margin-bottom: 48px;
		margin-top: 48px;
		padding: 0;
	}
`;

export default FormCounterBox;
