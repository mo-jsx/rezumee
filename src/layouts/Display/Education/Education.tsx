import moment from "moment";
import useProfileStore from "../.././../store/profileStore";
import "./styles.scss";

const Education = () => {
    const { university, degree, univStart, univEnd } = useProfileStore(
        state => ({
            university: state.university,
            degree: state.degree,
            univStart: state.univStart,
            univEnd: state.univEnd,
        }),
    );
    return (
        <div className="education">
            <h2>Education</h2>
            <h3 className="title">
                {degree ? degree : <span className="placeholder">Degree</span>}
                {university ? (
                    university
                ) : (
                    <span className="placeholder university">
                        ,University Name
                    </span>
                )}
            </h3>
            <h5 className="heading-regular no-padding-no-margin">
                {univStart ? (
                    moment(univStart).format("MMMM YYYY")
                ) : (
                    <span className="placeholder">Start Date</span>
                )}{" "}
                -{" "}
                {univEnd ? (
                    moment(univEnd).format("MMMM YYYY")
                ) : (
                    <span className="placeholder">End Date</span>
                )}
            </h5>
        </div>
    );
};

export default Education;
