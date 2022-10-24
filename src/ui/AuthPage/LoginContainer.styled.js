import styled from 'styled-components';

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	//!Цвет текста над inputom
	color: #ffffff;
	width: 100%;
	@media screen and (min-width: 768px) {
		background-color: #ffffff;
		width: 400px;
	}
`;

export default LoginContainer;
