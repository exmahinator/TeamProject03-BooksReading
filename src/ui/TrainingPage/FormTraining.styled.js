import styled from 'styled-components';

const FormTraining = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
	margin-bottom: 20px;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	max-width: 450px;
	margin-bottom: 20px;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		padding: 20px 42px;
		align-items: center;
		max-width: 1000px;
		margin-bottom: 28px;
	}
	@media screen and (min-width: 1280px) {
		width: 288px;
		padding: 0;
		flex-direction: column;
		display: flex;
		background-color: white;
		margin-bottom: 20px;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		margin-bottom: 40px;
	}
`;

export default FormTraining;
