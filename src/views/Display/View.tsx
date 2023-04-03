import "./view.scss";
import { Experience, Header } from "../../layouts/Display";

const View = () => {
    return (
        <div className="view">
            <div className="sheet">
                <Header />
                <Experience />
            </div>
        </div>
    );
};

export default View;
