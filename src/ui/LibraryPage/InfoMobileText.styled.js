import styled from 'styled-components';

const InfoMobileText = styled.p`
	display: flex;
	margin-bottom: 8px;
	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export default InfoMobileText;
