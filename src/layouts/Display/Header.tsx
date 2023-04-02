import useProfileStore from "../../store/profileStore";

const Header = () => {
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

    const contact = [
        { data: email, placeholder: "example@email.com" },
        { data: phone, placeholder: "(+1) 555 555 555" },
        { data: address, placeholder: "Newark, New Jersey" },
        { data: website, placeholder: "www.tony-soprano.com" },
    ];
    return (
        <header className="view-header">
            <div className="header-img">
                <img src="https://picsum.photos/200/200" alt="Haha!" />
            </div>
            <div className="header-name">
                <h2>
                    {firstName ? firstName : "Firstname"}{" "}
                    {middleName ? `${middleName.substring(0, 1)}.` : ""}{" "}
                    {lastName ? lastName : "Lastname"}
                </h2>
                <h4>{job ? job : "General Manager"}</h4>
                <p>
                    {bio
                        ? bio
                        : "A curios individual, who wants to master his craft."}
                </p>
            </div>

            <div className="header-contact">
                <ul>
                    {contact.map((field, index) => (
                        <li key={index}>
                            {field.data ? field.data : field.placeholder}
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
