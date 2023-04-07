import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useProfileStore from "../../../store/profileStore";
import { Education as IEducation } from "types/";
import "./styles.scss";

const Education = () => {
    const { updateDegree, updateUniversity, updateUnivStart, updateUnivEnd } =
        useProfileStore(state => ({
            updateDegree: state.updateDegree,
            updateUniversity: state.updateUniversity,
            updateUnivStart: state.updateUnivStart,
            updateUnivEnd: state.updateUnivEnd,
        }));

    const initValues: IEducation = {
        degree: "",
        university: "",
        univStart: new Date(),
        univEnd: new Date(),
    };

    return (
        <Formik
            initialValues={initValues}
            onSubmit={(values, actions) => {
                console.log(values);
                actions.setSubmitting(false);
            }}
        >
            {formik => {
                return (
                    <Form>
                        <div className="education-form">
                            <h2>Education</h2>
                            <div className="education">
                                <div className="details-input" id="degree">
                                    <label htmlFor="degree">Degree</label>
                                    <Field
                                        className="input"
                                        name="degree"
                                        id="degree"
                                        placeholder="Master Business Administration"
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>,
                                        ) => {
                                            formik.handleChange(e);
                                            updateDegree(e.target.value);
                                        }}
                                    />
                                    <ErrorMessage name="degree" />
                                </div>

                                <div className="details-input" id="university">
                                    <label htmlFor="university">
                                        University
                                    </label>
                                    <Field
                                        className="input"
                                        name="university"
                                        id="university"
                                        placeholder="Kalimanjaro University"
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>,
                                        ) => {
                                            formik.handleChange(e);
                                            updateUniversity(e.target.value);
                                        }}
                                    />
                                    <ErrorMessage name="university" />
                                </div>

                                <div className="details-input" id="univStart">
                                    <label htmlFor="univStart">
                                        Start Date
                                    </label>
                                    <Field
                                        type="date"
                                        className="input"
                                        name="univStart"
                                        id="univStart"
                                        placeholder="Kalimanjaro univStart"
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>,
                                        ) => {
                                            formik.handleChange(e);
                                            updateUnivStart(
                                                new Date(e.target.value),
                                            );
                                        }}
                                    />
                                    <ErrorMessage name="univStart" />
                                </div>

                                <div className="details-input" id="univEnd">
                                    <label htmlFor="univEnd">End Date</label>
                                    <Field
                                        type="date"
                                        className="input"
                                        name="univEnd"
                                        id="univEnd"
                                        placeholder="Kalimanjaro univEnd"
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>,
                                        ) => {
                                            formik.handleChange(e);
                                            updateUnivEnd(
                                                new Date(e.target.value),
                                            );
                                        }}
                                    />
                                    <ErrorMessage name="univEnd" />
                                </div>
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default Education;
