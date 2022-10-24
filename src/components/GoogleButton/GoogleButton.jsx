import { LoginButtonGoogle } from "ui/AuthPage";
import {ReactComponent as GoogleIcon} from'../../ui/AuthPage/Image/google-icon.svg'

const GoogleButton = ({ setMarkup }) => {
	return <LoginButtonGoogle href="https://bookread-backend.goit.global/auth/google"><GoogleIcon style={{marginRight: '17'}}/>Google</LoginButtonGoogle>;
};

export default GoogleButton;
