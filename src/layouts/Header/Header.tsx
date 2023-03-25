import useProfileStore from "../../store/profileStore";
import "./header.css";

const Header = () => {
    const { firstName } = useProfileStore(state => ({
        firstName: state.firstName,
    }));

    return (
        <header className="header">
            <img src={"https://picsum.photos/200/200"} alt={"Haha!"} />
            {firstName ? (
                <h1>{firstName.toUpperCase()}'s resume</h1>
            ) : (
                <h1>Resume</h1>
            )}
        </header>
    );
};

export default Header;
