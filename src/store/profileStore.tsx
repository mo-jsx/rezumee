import { create } from "zustand";
import { Details } from "types/";

interface ProfileState extends Details {
    updateFirstName: (by: string) => void;
    updateMiddleName: (by: string) => void;
    updateLastName: (by: string) => void;
    updateJob: (by: string) => void;
    updateEmail: (by: string) => void;
    updatePhone: (by: string) => void;
    updateAddress: (by: string) => void;
    updateWebsite: (by: string) => void;
    updateBio: (by: string) => void;
}

const useProfileStore = create<ProfileState>()(set => ({
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
}));

export default useProfileStore;
