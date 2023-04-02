import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import useProfileStore from "../../../store/profileStore";
import "./styles.scss";
import React from "react";

const Experience = () => {
    const { jobTitle, comapny, start, end, location, jobDesc } =
        useProfileStore(state => ({
            jobTitle: state.jobTitle,
            comapny: state.company,
            start: state.start,
            end: state.end,
            location: state.location,
            jobDesc: state.jobDesc,
        }));

    const {
        updateJobTitle,
        updateCompany,
        updateStart,
        updateEnd,
        updateLocation,
        updateJobDesc,
    } = useProfileStore(state => ({
        updateJobTitle: state.updateJobTitle,
        updateCompany: state.updateCompany,
        updateStart: state.updateStart,
        updateEnd: state.updateEnd,
        updateLocation: state.updateLocation,
        updateJobDesc: state.updateJobDesc,
    }));

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
                {formik => {
                    return (
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
                                        onChange={(
                                            e: React.ChangeEvent<HTMLSelectElement>,
                                        ) => {
                                            formik.handleChange(e);
                                            updateJobTitle(e.target.value);
                                        }}
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
                                        onChange={(
                                            e: React.ChangeEvent<HTMLSelectElement>,
                                        ) => {
                                            formik.handleChange(e);
                                            updateCompany(e.target.value);
                                        }}
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
                                        onChange={(
                                            e: React.ChangeEvent<HTMLSelectElement>,
                                        ) => {
                                            formik.handleChange(e);
                                            updateStart(
                                                new Date(e.target.value),
                                            );
                                        }}
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
                                        onChange={(
                                            e: React.ChangeEvent<HTMLSelectElement>,
                                        ) => {
                                            formik.handleChange(e);
                                            updateEnd(new Date(e.target.value));
                                        }}
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
                                        onChange={(
                                            e: React.ChangeEvent<HTMLSelectElement>,
                                        ) => {
                                            formik.handleChange(e);
                                            updateLocation(e.target.value);
                                        }}
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
                                            onChange={(
                                                e: React.ChangeEvent<HTMLSelectElement>,
                                            ) => {
                                                formik.handleChange(e);
                                                updateJobDesc(e.target.value);
                                            }}
                                        />
                                    </GrammarlyEditorPlugin>
                                    <ErrorMessage name="desc" />
                                </div>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default Experience;
