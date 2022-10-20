import styled from 'styled-components';

const LibraryForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 1141px;
  }
`;

export default LibraryForm;
