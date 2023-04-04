import { create } from "zustand";
import { Details, Experience } from "types/";

// Updaters: function to update property
interface ProfileState extends Details, Experience {
    // Details
    updateFirstName: (by: string) => void;
    updateMiddleName: (by: string) => void;
    updateLastName: (by: string) => void;
    updateJob: (by: string) => void;
    updateEmail: (by: string) => void;
    updatePhone: (by: string) => void;
    updateAddress: (by: string) => void;
    updateWebsite: (by: string) => void;
    updateBio: (by: string) => void;

    // Experience
    updateJobTitle: (by: string) => void;
    updateCompany: (by: string) => void;
    updateStart: (by: Date) => void;
    updateEnd: (by: Date) => void;
    updateLocation: (by: string) => void;
    updateJobDesc: (by: string) => void;
}

const useProfileStore = create<ProfileState>()(set => ({
    // Details
    firstName: "",
    middleName: "",
    lastName: "",
    job: "",
    email: "",
    phone: "",
    address: "",
    website: "",
    bio: "",

    updateFirstName: firstName => set({ firstName: firstName }),
    updateMiddleName: middleName => set({ middleName: middleName }),
    updateLastName: lastName => set({ lastName: lastName }),
    updateJob: job => set({ job: job }),
    updateEmail: email => set({ email: email }),
    updatePhone: phone => set({ phone: phone }),
    updateAddress: address => set({ address: address }),
    updateWebsite: website => set({ website: website }),
    updateBio: bio => set({ bio: bio }),

    // Experience
    jobTitle: "",
    company: "",
    start: new Date(),
    end: new Date(),
    location: "",
    jobDesc: "",

    updateJobTitle: jobTitle => set({ jobTitle: jobTitle }),
    updateCompany: company => set({ company: company }),
    updateStart: start => set({ start: start }),
    updateEnd: end => set({ end: end }),
    updateLocation: location => set({ location: location }),
    updateJobDesc: jobDesc => set({ jobDesc: jobDesc }),
}));

export default useProfileStore;
