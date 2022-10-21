import { useDispatch, useSelector } from 'react-redux';

import { logOut } from 'redux/auth/authOperation';
import { getUserEmail, getAccessToken } from 'redux/auth/authSelector';


const Header = () => {
	const dispatch = useDispatch();
	const userEmail = useSelector(getUserEmail);
	const accessToken = useSelector(getAccessToken);

	return (
		<header style={{ display: 'flex' }}>
			<div>BR</div>
			<div>
				<span>M</span>
				<p>{userEmail}</p>
			</div>
			<div>
				<span>a</span>
				<span>s</span>
				<button
					type="button"
					onClick={() => {
						dispatch(logOut(accessToken));
					}}
				>
					Logout
				</button>
			</div>
		</header>
	);
};

export default Header;