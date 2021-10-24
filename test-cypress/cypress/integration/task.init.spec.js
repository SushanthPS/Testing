/* eslint-disable no-undef */
describe("initial conditions ", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.server();
    });

    it("input getting focused", () => {
        cy.get(".task-input").focused();
    });

    it("should add task and validate if added successfully", () => {
        let value = "Hello World";

        cy.route("GET", "/api/tasks", "fixture:tasks");

        cy.route({
            method: "POST",
            url: "/api/task",
            status: 200,
            response: {
                id: 1,
                name: value,
                completed: false,
            },
        });

        cy.get("#error-id").should("not.exist");
        cy.get(".task-input").type(value).type("{enter}");
        cy.get(".task-list li").should("contain", value);
    });
});
