import styled from 'styled-components';

const RegistrationDescriptionButton = styled.button`
	background-color: #ff6b08;
	color: white;
	width: 130px;
	height: 40px;
	border: none;

	&:hover {
		color: #242a37;
		border: 1px solid #242a37;
		background: #ffffff;
		box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
	}

	cursor: pointer;

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export default RegistrationDescriptionButton;
