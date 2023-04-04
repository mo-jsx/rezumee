import "./view.scss";
import { Education, Experience, Header } from "../../layouts/Display";

const View = () => {
    return (
        <div className="view">
            <div className="sheet">
                <Header />
                <Experience />
                <Education />
            </div>
        </div>
    );
};

export default View;
