import styled from 'styled-components';

const ButtonModal = styled.div`
	display: flex;
	flex-direction: column;
	color: #242A37;
	height: 40px;
	background: #fff;
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 14px;
	align-items: center;
	justify-content: center;
	padding:12px 27px;
	margin-right: 16px;
	cursor: pointer;
	border: 1px solid #242A37;

	:hover{
		color: white;
		background-color:#FF6B08;
	}
`;

export default ButtonModal;