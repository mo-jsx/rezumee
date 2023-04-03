import { Formik, Form, useFormikContext, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Details as DetailsProps } from "types/";

import "./details.scss";
import useProfileStore from "../../../store/profileStore";

import { Editor } from "../../../components/";

const validation = Yup.object({
    // firstName: Yup.string().required("Required!"),
    // lastName: Yup.string().required("Required!"),
});

const Details = () => {
    const {
        updateFirstName,
        updateMiddleName,
        updateLastName,
        updateJob,
        updateEmail,
        updatePhone,
        updateAddress,
        updateBio,
        updateWebsite,
    } = useProfileStore(state => ({
        updateFirstName: state.updateFirstName,
        updateMiddleName: state.updateMiddleName,
        updateLastName: state.updateLastName,
        updateJob: state.updateJob,
        updateEmail: state.updateEmail,
        updatePhone: state.updatePhone,
        updateAddress: state.updateAddress,
        updateBio: state.updateBio,
        updateWebsite: state.updateWebsite,
    }));

    const initValues: DetailsProps = {
        firstName: "",
        middleName: "",
        lastName: "",
        job: "",
        email: "",
        phone: "",
        address: "",
        bio: "",
        website: "",
    };

    return (
        <Formik
            initialValues={initValues}
            validationSchema={validation}
            onSubmit={(values, actions) => {
                console.log(JSON.stringify(values, null, 2));

                actions.setSubmitting(false);
            }}
        >
            {formik => {
                return (
                    <Form className="details-form">
                        <h2>Your details</h2>
                        <div className="details">
                            <div className="details-input" id="firstName">
                                <label htmlFor="firstName">First Name</label>
                                <Field
                                    className="input"
                                    name="firstName"
                                    id="firstName"
                                    placeholder="Anthony"
                                    onChange={e => {
                                        formik.handleChange(e);
                                        updateFirstName(e.target.value);
                                    }}
                                />
                                <ErrorMessage name="firstName" />
                            </div>

                            <div className="details-input" id="middleName">
                                <label htmlFor="firstName">Middle Name</label>
                                <Field
                                    className="input"
                                    name="middleName"
                                    id="middleName"
                                    placeholder="John"
                                    onChange={e => {
                                        formik.handleChange(e);
                                        updateMiddleName(e.target.value);
                                    }}
                                />
                                <ErrorMessage name="middleName" />
                            </div>

                            <div className="details-input" id="lastName">
                                <label htmlFor="lastName">Last Name</label>
                                <Field
                                    className="input"
                                    name="lastName"
                                    id="lastName"
                                    placeholder="Soprano"
                                    onChange={e => {
                                        formik.handleChange(e);
                                        updateLastName(e.target.value);
                                    }}
                                />
                                <ErrorMessage name="lastName" />
                            </div>

                            <div className="details-input" id="job">
                                <label htmlFor="job">Job Title</label>
                                <Field
                                    className="input"
                                    name="job"
                                    id="job"
                                    placeholder="Enterpreneur"
                                    onChange={e => {
                                        formik.handleChange(e);
                                        updateJob(e.target.value);
                                    }}
                                />
                                <ErrorMessage name="job" />
                            </div>

                            <div className="details-input" id="email">
                                <label htmlFor="email">Email</label>
                                <Field
                                    className="input"
                                    name="email"
                                    id="email"
                                    placeholder="tony.soprano1@gmail.com"
                                    onChange={e => {
                                        formik.handleChange(e);
                                        updateEmail(e.target.value);
                                    }}
                                />
                                <ErrorMessage name="email" />
                            </div>

                            <div className="details-input" id="phone">
                                <label htmlFor="phone">Phone</label>
                                <Field
                                    className="input"
                                    name="phone"
                                    id="phone"
                                    placeholder="(+1) 555 555 555"
                                    onChange={e => {
                                        formik.handleChange(e);
                                        updatePhone(e.target.value);
                                    }}
                                />
                                <ErrorMessage name="phone" />
                            </div>

                            <div className="details-input" id="website">
                                <label htmlFor="website">Website</label>
                                <Field
                                    className="input"
                                    name="website"
                                    id="website"
                                    placeholder="www.tony-soprano.com"
                                    onChange={e => {
                                        formik.handleChange(e);
                                        updateWebsite(e.target.value);
                                    }}
                                />
                                <ErrorMessage name="website" />
                            </div>

                            <div className="details-input" id="address">
                                <label htmlFor="address">Address</label>
                                <Field
                                    className="input "
                                    name="address"
                                    id="address"
                                    placeholder="Newark, New Jersey"
                                    onChange={e => {
                                        formik.handleChange(e);
                                        updateAddress(e.target.value);
                                    }}
                                />
                                <ErrorMessage name="address" />
                            </div>

                            <div className="details-input" id="bio">
                                <label htmlFor="bio">Bio</label>
                                <Editor name={"bio"} updateProp={updateBio} />
                                <ErrorMessage name="lastName" />
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default Details;
