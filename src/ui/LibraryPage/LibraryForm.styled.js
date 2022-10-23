import styled from 'styled-components';

const LibraryForm = styled.form`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: 768px) {
		margin-bottom: 40px;
	}

	@media screen and (min-width: 1280px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: 40px;
		max-width: 1141px;
	}
`;

export default LibraryForm;
