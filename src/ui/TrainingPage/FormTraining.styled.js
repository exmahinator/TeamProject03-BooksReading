import styled from 'styled-components';

const FormTraining = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 0;
	margin-bottom: 40px;
	background-color: white;
	box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		padding-top: 20px;
		align-items: center;
	}
	@media screen and (min-width: 1280px) {
		width: 288px;
		padding-top: 0;
		flex-direction: column;
	}
`;

export default FormTraining;
