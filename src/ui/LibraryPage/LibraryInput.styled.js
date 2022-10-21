import styled from 'styled-components';

const LibraryInput = styled.input`
	display: flex;
	padding: 12px;
	margin-top: 8px;
	background-color: inherit;
	border: 1px solid #a6abb9;
	font-weight: 400;
	outline: none;
	:focus {
		box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
		background-color: #ffffff;
	}
`;

export default LibraryInput;
