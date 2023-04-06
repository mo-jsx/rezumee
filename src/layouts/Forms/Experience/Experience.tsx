import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { Editor } from "../../../components/";
import useProfileStore from "../../../store/profileStore";

import "./styles.scss";

const Experience = () => {
    // ZUSTAND
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
        jobTitle: "",
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
                                    <label htmlFor="jobTitle">Job Title</label>
                                    <Field
                                        name="jobTitle"
                                        id="jobTitle"
                                        placeholder="CEO"
                                        className="input"
                                        onChange={(
                                            e: React.ChangeEvent<HTMLSelectElement>,
                                        ) => {
                                            formik.handleChange(e);
                                            updateJobTitle(e.target.value);
                                        }}
                                    />
                                    <ErrorMessage name="jobTitle" />
                                </div>

                                <div className="details-input company">
                                    <label htmlFor="company">Company</label>
                                    <Field
                                        name="company"
                                        id="company"
                                        placeholder="Uber"
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
                                        placeholder="Start Date"
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
                                        placeholder="End Date"
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
                                        placeholder="Newark, New Jersey"
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
                                    <label htmlFor="desc">
                                        Job Description
                                    </label>
                                    <Editor
                                        label={"Editor"}
                                        name={"desc"}
                                        updateProp={updateJobDesc}
                                    />
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
