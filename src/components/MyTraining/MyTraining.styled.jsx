import styled from 'styled-components';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import Select from '@mui/material/Select';


export const Wrapper = styled.div`
	width: 100%;
`;


export const Title = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 60px;
	margin: 32px 0 20px 0;
	font-family: Montserrat;
	font-weight: 600;
	font-size: 20px;
	line-height: 1.2;
	background-color: rgba(177, 181, 194, 1);
	color: rgba(255, 255, 255, 1);

	@media screen and (min-width: 768px) {
		margin-bottom: 28px;
	}

	@media screen and (min-width: 1280px) {
	margin: 0;
	}
`;

export const WrapperDatePicker = styled(DatePicker)`
	width: 100%;
	border-radius: 0;
`;

export const BoxForm = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const WrapperCallendar = styled.div`
	@media screen and (min-width: 768px) {
		display: flex;
		flex-wrap: nowrap;
		margin-bottom: 24px;

		/* @media screen and (min-width: 768px) {
		gap: 0;
	} */
	}
`;

export const BoxCallendar = styled.div`
	@media screen and (min-width: 768px) {
		width: 250px;
		height: 42px;
		margin-right: 40px;
		&:last-child {
			margin-right: 0;
		}
	}
`;

export const WrapperSelect = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
	@media screen and (min-width: 768px) {
	flex-direction: row;
		flex-wrap: nowrap;
		margin-bottom: 40px;
	}
`;

export const SelectForm = styled.select`
	display: block;
	width: 100%;
	height: 42px;
	font-family: Montserrat;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.21;
	color: rgba(166, 171, 185, 1);
	background-color: #ffffff;
	box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
	border: 1px solid transparent;

	@media screen and (min-width: 768px) {

// 	}
`;

// export const SelectBox = styled.div`
// 	@media screen and (min-width: 768px) {

// 	}
// `;

export const Button = styled.button`
	box-sizing: border-box;
	margin-top: 32px;
	width: 171px;
	height: 42px;
	margin-left: auto;
	margin-right: auto;
	font-family: Montserrat;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.21;
	border: 1px solid #242a37;
	background-color: #f6f7fb;

	@media screen and (min-width: 768px) {
		margin: 0 0 0 50px;
	}
`;
