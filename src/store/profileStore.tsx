import { create } from "zustand";

import { Details } from "types/";

interface ProfileState extends Details {
    update: (prop: string, by: string) => void;
}

const useProfileStore = create<ProfileState>()(set => ({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    bio: "",

    update: by => set({ firstname: by }),
}));
