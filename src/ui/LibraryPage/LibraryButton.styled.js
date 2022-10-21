import styled from 'styled-components';

const LibraryButton = styled.button`
	display: flex;
	background: #f6f7fb;
	border: 1px solid #242a37;
	padding: 12px 58px;
	font-weight: 500;
	cursor: pointer;
	:hover {
		background-color: #ffffff;
	}
	@media screen and (min-width: 1280px) {
		padding: 12px 63px;
	}
`;

export default LibraryButton;
