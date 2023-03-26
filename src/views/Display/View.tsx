import "./view.scss";
import useProfileStore from "../../store/profileStore";

const View = () => {
    const {
        firstName,
        middleName,
        lastName,
        email,
        phone,
        website,
        address,
        job,
        bio,
    } = useProfileStore(state => ({
        firstName: state.firstName,
        middleName: state.middleName,
        lastName: state.lastName,
        email: state.email,
        phone: state.phone,
        website: state.website,
        job: state.job,
        bio: state.bio,
        address: state.address,
    }));

    const contact = [email, phone, address, website];

    return (
        <div className="view">
            <div className="sheet">
                <div className="view-header">
                    <div className="header-img">
                        <img src="https://picsum.photos/200/200" alt="Haha!" />
                    </div>
                    <div className="header-name">
                        <h2>
                            {firstName} {middleName.substring(0, 1)}. {lastName}
                        </h2>
                        <h4>{job}</h4>
                        <p>{bio}</p>
                    </div>

                    <div className="header-contact">
                        <ul>
                            {contact.map((field, index) => (
                                <li key={index}>{field}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;
