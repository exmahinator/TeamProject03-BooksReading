import { useDispatch, useSelector } from 'react-redux';

import { logOut, refreshUser } from 'redux/auth/authOperation';
import { getUserEmail, getSid, getAccessToken } from 'redux/auth/authSelector';


const Header = () => {
	const dispatch = useDispatch();
	const userEmail = useSelector(getUserEmail);
	const sid = useSelector(getSid);
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
				<button
					type="button"
					onClick={() => {
						dispatch(refreshUser({ sid }));
					}}
				>
					Refresh
				</button>
			</div>
		</header>
	);
};

export default Header;
