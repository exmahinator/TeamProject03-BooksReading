import styled from 'styled-components';

const InfoText = styled.span`
	display: flex;
	margin-left: 8px;
	font-weight: 400;
	font-size: 14px;
	line-height: 1.21;
	max-width: 155px;
	@media screen and (min-width: 768px) {
		max-width: fit-content;
	}
`;

export default InfoText;
