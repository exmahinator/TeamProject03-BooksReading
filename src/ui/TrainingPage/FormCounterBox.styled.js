import styled from 'styled-components';

const FormCounterBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: calc((100% - 24px) / 3);

	@media screen and (min-width: 768px) {
		margin: 0;
	}
	@media screen and (min-width: 1280px) {
		
	}
`;

export default FormCounterBox;
