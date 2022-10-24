import styled from 'styled-components';

const LibraryBooklistTabletSubContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	padding: ${props =>
		props.bookName ? '14px 0 14px 60px' : '14px 20px 14px 16px'};
	padding: ${props => props.bookDesktopName && '14px 0 14px 60px'};
	justify-content: ${props =>
		props.bookName ? 'flex-start' : 'space-between'};
	padding: ${props => props.noPadding && '0'};
	padding: ${props => props.leftPadding && '0 21px 0 75px'};
	width: ${props => props.shrinkedContainer && '33%'};
	width: ${props => props.noWidth && 'auto'};
	width: ${props => props.shrinkedWidth && '50%'};

	@media screen and (min-width: 1280px) {
		width: ${props => props.bookName && '50%'};
		width: ${props => props.bookDesktopName && '100%'};
	}
`;

export default LibraryBooklistTabletSubContainer;
