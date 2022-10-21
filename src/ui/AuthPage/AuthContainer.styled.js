import styled from 'styled-components';

const AuthContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 1280px) {
		flex-direction: row;
	}
`;

export default AuthContainer;
