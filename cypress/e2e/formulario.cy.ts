describe("Formulario de usuarios", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("debe permitir ingresar un usuario y mostrarlo en la lista", () => {
    // Llenar nombre
    cy.get('input[placeholder="Nombre"]').type("Juan Pérez");

    // Llenar correo (ajusta si el placeholder es diferente)
    cy.get('input[placeholder="Correo"]').type("juan@mail.com");

    // Clic en el botón
    cy.get("button").contains("Agregar").click();

    // Verificar que aparece en la lista
    cy.contains("Juan Pérez").should("be.visible");
  });
});
