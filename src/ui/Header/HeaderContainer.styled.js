import styled from 'styled-components';

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	padding: 0 20px;
	height: 60px;
	background: #ffffff;
	box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

	@media screen and (min-width: 768px) {
		padding: 0 32px;
	}

	@media screen and (min-width: 1280px) {
		padding: 0 16px;
	}
`;
export default HeaderContainer;