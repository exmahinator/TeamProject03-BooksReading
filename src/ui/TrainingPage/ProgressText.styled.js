import styled from 'styled-components';

const ProgressText = styled.span`
	display: flex;
	align-items: center;
	text-align: center;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.21;
	@media screen and (min-width: 768px) {
		text-align: left;
		font-size: 11px;
		line-height: 1.18;
	}
	@media screen and (min-width: 1280px) {
		text-align: center;
		font-size: 14px;
		line-height: 1.21;
	}
`;

export default ProgressText;
