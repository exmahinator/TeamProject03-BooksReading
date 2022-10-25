import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

const ChartWrapper = styled(Line)`
	/* background-color: white; */
	margin-bottom: 4px;
	@media screen and (min-width: 1280px) {
		/* max-width: 928px;
		max-height: 340px; */
	}
`;

export default ChartWrapper;
