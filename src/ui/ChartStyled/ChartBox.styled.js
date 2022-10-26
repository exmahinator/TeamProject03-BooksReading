import styled from 'styled-components';

const ChartBox = styled.div`
	background-color: white;
	padding: 25px 22px 20px 22px;
	margin-bottom: 32px;
	box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);

	@media screen and (min-width: 768px) {
		margin-bottom: 40px;
	}

	@media screen and (min-width: 1280px) {
		/* max-width: 928px; */
		/* max-height: 340px; */
		/* padding-left: 40px; */
		/* padding-right: 77px; */
	}
`;

export default ChartBox;
