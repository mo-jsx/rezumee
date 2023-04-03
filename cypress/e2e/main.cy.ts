import { faker } from "@faker-js/faker";
import { Details } from "../../src/types";

describe("Filling forms", () => {
    before(() => {
        cy.visit("http://localhost:5173");
    });

    const profile: Details = {
        firstName: faker.name.firstName(),
        middleName: faker.name.firstName(),
        lastName: faker.name.firstName(),
        job: faker.name.jobTitle(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        address: faker.address.cityName(),
        website: faker.internet.domainName(),
        bio: faker.lorem.lines(2),
    };

    it("Personal Details", () => {
        Object.keys(profile)
            .filter(detail => detail !== "bio")
            .map(detail => {
                cy.get(`input[name=${detail}]`).type(profile[detail]);
            });
    });
});
