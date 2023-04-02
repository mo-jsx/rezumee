import "./view.scss";
import useProfileStore from "../../store/profileStore";
import Header from "../../layouts/Display/Header";

const View = () => {
    return (
        <div className="view">
            <div className="sheet">
                <Header />
            </div>
        </div>
    );
};

export default View;
