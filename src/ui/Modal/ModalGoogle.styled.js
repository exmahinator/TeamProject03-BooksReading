import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ModalButtonGoogle = styled.a`
	display: flex;
	color: #707375;
	padding-right: 50px;
	padding-left: 17px;
	background: #ff6b08;
	font-family: 'Roboto';
	font-weight: 700;
	font-size: 16px;
	align-items: center;
	justify-content: center;
	height: 42px;
	background: #f5f7fa;
	box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15);
	text-decoration: none;
	cursor: pointer;
	 @media screen and (max-width: 767px) {
		padding-right: 16px;
		padding-left: 4;
	}
`;

export const ButtonReturn = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 130px;
	height: 40px;
	border: none;
	background-color: #ff6b08;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.2;
	color: #ffffff;
	box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15);
	text-decoration: none;
	border: 1px solid transparent;

	&:hover {
		color: #242a37;
		border: 1px solid #242a37;
		background: #ffffff;
		box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15);
	}

	@media screen and (max-width: 767px) {
		width: 98px;
		height: 40px;
	}
`;

export const ModalGoogleText = styled.div`
	font-family: 'Montserrat';
	font-weight: 500;
	font-size: 16px;
	line-height: 1.4;
	text-align: center;
	color: #242a37;
`;

export const ButtonConteinerGoogle = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 24px;
`;

export const ModalConteinerGoogle = styled.div`
	padding: 48px 32px;
	width: 320px;

	@media screen and (max-width: 767px) {
		padding: 48px 16px;
		width: 280px;
	}
`;