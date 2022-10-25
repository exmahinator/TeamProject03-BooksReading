import styled from 'styled-components';

const InfoDescription = styled.p`
	display: inline-flex;
	margin-left: 12px;
	font-weight: 600;
	font-size: 14px;
	line-height: 1.21;
	color: #242a37;
	max-width: 178px;

	@media screen and (min-width: 768px) {
		max-width: fit-content;
		margin-bottom: 16px;
		font-size: 16px;
		line-height: 1.25;
	}
`;

export default InfoDescription;
