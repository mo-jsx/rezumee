import { ImgUpload } from "../../components/";
import useProfileStore from "../../store/profileStore";

import "./header.css";

const Header = () => {
    // ZUSTAND
    const { firstName } = useProfileStore(state => ({
        firstName: state.firstName,
    }));

    return (
        <header className="header">
            <ImgUpload />
            {firstName ? (
                <h1>{firstName.toUpperCase()}'s resume</h1>
            ) : (
                <h1>Resume</h1>
            )}
        </header>
    );
};

export default Header;
