import styled from 'styled-components';

const LibrarySubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  :not(:last-child) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    width: auto;
    :not(:last-child) {
      margin-bottom: 0;
      margin-right: 32px;
    }
    :first-child {
      flex-grow: 1;
    }
    :nth-last-child(-n + 2) {
      max-width: 152px;
    }
  }
  @media screen and (min-width: 1280px) {
    width: auto;
    :not(:last-child) {
      margin-bottom: 0;
      margin-right: 16px;
    }
    :first-child {
      flex-grow: 1;
      width: 250px;
    }
    :nth-last-child(-n + 2) {
      width: 134px;
    }
  }
  /* :last-child {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
    margin-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0;
    margin-right: 16px;
    :last-child {
      margin-bottom: 0px;
      margin-right: 48px;
    }
  } */
`;

export default LibrarySubContainer;
