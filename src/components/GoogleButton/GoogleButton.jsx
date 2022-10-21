import { useDispatch } from "react-redux";

import { loginWithGoogle } from 'redux/auth/authOperation';

const GoogleButton = () => {
    const dispatch = useDispatch();
    return (
        <button type="button" onClick={()=>{dispatch(loginWithGoogle())}}>Google</button>
    )
};

export default GoogleButton;