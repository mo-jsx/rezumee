import moment from "moment";

import useProfileStore from "../../../store/profileStore";
import "./styles.scss";

const DescPlaceholder = () => {
    return (
        <ul className="placeholder">
            <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, doloremque.
            </li>
        </ul>
    );
};

const Experience = () => {
    const { jobTitle, company, start, end, location, jobDesc } =
        useProfileStore(state => ({
            jobTitle: state.jobTitle,
            company: state.company,
            start: state.start,
            end: state.end,
            location: state.location,
            jobDesc: state.jobDesc,
        }));

    return (
        <div className="display-experience">
            <h2>Experience</h2>
            <div className="head">
                <div className="left">
                    <h3 className="job-title">
                        {jobTitle ? (
                            jobTitle
                        ) : (
                            <span className="placeholder">Job Title</span>
                        )}
                        ,{" "}
                        <span className="heading-regular placeholder">
                            {company ? company : "Company Name"}
                        </span>
                    </h3>
                    <h5 className="heading-regular no-padding-no-margin">
                        {start ? (
                            moment(start).format("MMMM YYYY")
                        ) : (
                            <span className="placeholder">Start date</span>
                        )}{" "}
                        -{" "}
                        {end ? (
                            moment(end).format("MMMM YYYY")
                        ) : (
                            <span className="placeholder">Present</span>
                        )}
                    </h5>
                </div>

                <div className="right">
                    <h4 className="heading-regular">
                        {location ? (
                            location
                        ) : (
                            <span className="placeholder">Location</span>
                        )}
                    </h4>
                </div>
            </div>

            <div className="desc">
                {jobDesc ? (
                    <span dangerouslySetInnerHTML={{ __html: jobDesc }} />
                ) : (
                    <DescPlaceholder />
                )}
            </div>
        </div>
    );
};

export default Experience;
