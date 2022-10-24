import styled from 'styled-components';

const ProgressContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	font-family: 'Montserrat';
	padding: 0;
	@media screen and (min-width: 768px) {
		background-color: #ffffff;
		flex-direction: row;
		justify-content: space-between;
		padding: 20px 52px 8px 28px;
	}
	@media screen and (min-width: 1280px) {
		background-color: transparent;
		flex-direction: column;
		justify-content: center;
		padding: 0;
	}
`;

export default ProgressContainer;
