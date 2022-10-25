import styled from 'styled-components';

const InfoGapContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	:first-child {
		margin-bottom: 20px;
		@media screen and (min-width: 768px) {
			margin-bottom: 24px;
		}
	}
	@media screen and (min-width: 768px) {
		display: block;
	}
`;

export default InfoGapContainer;
