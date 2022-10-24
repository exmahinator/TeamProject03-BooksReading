import styled from 'styled-components';

const ProgressItem = styled.ul`
	display: flex;
	width: inherit;
	/* justify-content: space-between; */
	padding: 44px 30px;
	width: 100%;
	background: #ffffff;
	box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
	@media screen and (min-width: 768px) {
		padding: 0;
		box-shadow: none;
	}
	@media screen and (min-width: 1280px) {
		padding: 48px 34px;
		box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
	}
`;

export default ProgressItem;
