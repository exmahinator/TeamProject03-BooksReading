import { useDispatch } from "react-redux";

import { loginWithGoogle } from 'redux/auth/authOperation';

const GoogleButton = ({setMarkup}) => {
    const dispatch = useDispatch();
    return (
        <button type="button" onClick={()=>{dispatch(loginWithGoogle(setMarkup))}}>Google</button>
    )
};

export default GoogleButton;