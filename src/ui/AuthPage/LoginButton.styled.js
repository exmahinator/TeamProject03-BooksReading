import styled from 'styled-components';

const LoginButton = styled.button`
	display: flex;
	flex-direction: column;
	color: #ffffff;
	height: 60px;
	background: #ff6b08;
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 16px;
	align-items: center;
	justify-content: center;
	width: 100%;
	border: none;
	margin-bottom: 20px;

	&:hover {
		color: #242a37;
		border: 1px solid #242a37;
		background: #ffffff;
		box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
	}

	cursor: pointer;
`;

export default LoginButton;
