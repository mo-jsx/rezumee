import "./view.scss";
import useProfileStore from "../../store/profileStore";

const View = () => {
    const { firstName } = useProfileStore(state => ({
        firstName: state.firstName,
    }));

    return (
        <div className="view">
            View
            <h1>Here's : {firstName}</h1>
        </div>
    );
};

export default View;
