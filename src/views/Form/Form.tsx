import { Details, Education, Experience, Header } from "../../layouts";

import "./form.scss";

const Form = () => {
    return (
        <div className="form">
            <Header />
            <Details />
            <Experience />
            <Education />
        </div>
    );
};

export default Form;
