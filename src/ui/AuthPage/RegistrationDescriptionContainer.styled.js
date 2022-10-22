import styled from 'styled-components';

const RegistrationDescriptionContainer = styled.div`
	padding: 32px 25px 40px 25px;
	@media screen and (min-width: 768px) {
		display: flex;
		text-align: center;
		flex-direction: column;
		align-items: center;
		padding: 0;
		padding-top: 64px;
	}
	@media screen and (min-width: 1280px) {
		padding: 0;
		margin: auto;
	}
`;

export default RegistrationDescriptionContainer;
