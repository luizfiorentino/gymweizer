describe("Home Page", () => {
  it("should visit the home page", () => {
    cy.visit("/"); // Open homepage
    cy.get("h1").should("contain", "Welcome to GymWeizer"); // Check if title exists
  });
});
