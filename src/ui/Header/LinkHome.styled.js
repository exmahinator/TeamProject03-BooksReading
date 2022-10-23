import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkHome = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
    margin-right: 12px;
	width: 33px;
	height: 33px;
	border-radius: 50%;
	background: #f5f7fa;
`;

export default LinkHome;