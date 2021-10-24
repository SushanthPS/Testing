/* eslint-disable no-undef */
describe("initial conditions ", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.server();
    });

    it("input getting focused", () => {
        cy.get(".task-input").focused();
    });
});
