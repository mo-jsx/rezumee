import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import "./styles.scss";

const Experience = () => {
    const initValues = {
        job: "",
        company: "",
        start: "",
        end: "",
        location: "",
        desc: "",
    };
    return (
        <div>
            <Formik
                initialValues={initValues}
                onSubmit={(values, actions) => {
                    console.log(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                <Form className="experience-form">
                    <h2>Your Experience</h2>
                    <div className="experience">
                        <div className="details-input jobTitle">
                            <label htmlFor="job">Job Title</label>
                            <Field
                                name="job"
                                id="job"
                                placeholder="CEO"
                                className="input"
                            />
                            <ErrorMessage name="job" />
                        </div>

                        <div className="details-input company">
                            <label htmlFor="company">Company</label>
                            <Field
                                name="company"
                                id="company"
                                placeholder="CEO"
                                className="input"
                            />
                            <ErrorMessage name="company" />
                        </div>

                        <div className="details-input startDate">
                            <label htmlFor="start">Start</label>
                            <Field
                                type="date"
                                name="start"
                                id="start"
                                placeholder="CEO"
                                className="input"
                            />
                            <ErrorMessage name="start" />
                        </div>

                        <div className="details-input endDate">
                            <label htmlFor="end">End</label>
                            <Field
                                type="date"
                                name="end"
                                id="end"
                                placeholder="CEO"
                                className="input"
                            />
                            <ErrorMessage name="end" />
                        </div>

                        <div className="details-input location">
                            <label htmlFor="location">Location</label>
                            <Field
                                name="location"
                                id="location"
                                placeholder="CEO"
                                className="input"
                            />
                            <ErrorMessage name="location" />
                        </div>

                        <div className="details-input jobDesc">
                            <label htmlFor="desc">Description</label>
                            <GrammarlyEditorPlugin clientId="client_8uvgmmYtA3FKgst7xf8ZfF">
                                <Field
                                    as="textarea"
                                    name="desc"
                                    id="desc"
                                    placeholder="CEO"
                                    className="textarea"
                                />
                            </GrammarlyEditorPlugin>
                            <ErrorMessage name="desc" />
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default Experience;
