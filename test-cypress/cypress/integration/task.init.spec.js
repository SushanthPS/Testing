/* eslint-disable no-undef */
describe("initial conditions ", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.server();
    });

    it("should have default data", () => {
        cy.route("GET", "/api/tasks", "fixture:tasks");
        cy.get(".task-list li").should("have.length", 3);
        cy.get("#todo-2").should("contain", 22222);
    });
});
