import styled from 'styled-components';

const LibraryBooklistTabletYear = styled.span`
	display: inline-flex;
	max-width: 32px;
	display: flex;
	padding-left: ${props => props.bookYear && '15px'};
`;

export default LibraryBooklistTabletYear;
