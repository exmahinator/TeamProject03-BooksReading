import styled from 'styled-components';

const ProgressNumber = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 14px;
	color: #091e3f;
	background-color: #f5f7fa;
	box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
	font-family: 'Open Sans';
	font-weight: 700;
	font-size: 45px;
	line-height: 0.84;
	max-width: 100px;
	max-height: 100px;
	padding: 31px 34px;
	@media screen and (min-width: 768px) {
		margin-bottom: 4px;
		padding: 11px 27px;
	}
	@media screen and (min-width: 1280px) {
		margin-bottom: 14px;
		padding: 31px 24px;
	}
`;

export default ProgressNumber;
