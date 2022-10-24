import styled from 'styled-components';

const ListDesk = styled.ul`

  max-width: 800px;
  list-style: none;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  margin: 0 auto 32px auto;
  font-family: Montserrat;
  font-size: 12px;
  color: #242A37;
  font-weight: 500;
  padding: 0;

  display: none; 

  @media screen and (min-width: 768px) {
  display: block;
	}
`

export default ListDesk;