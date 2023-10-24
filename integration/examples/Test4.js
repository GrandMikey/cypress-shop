// Describe un conjunto de pruebas
describe('Ejemplo de búsqueda en Google', () => {
    // Antes de cada prueba, visita el sitio web de Google
    beforeEach(() => {
        cy.visit('https://www.google.com');

    });



    // Realiza una búsqueda en Google
    it('Realizar una búsqueda', () => {
        // Espera a que el botón "Aceptar todo" aparezca y sea visible, luego haz clic en él
        cy.get('#L2AGLb').contains('Aceptar todo').click();
        cy.wait(1000)
        // Selecciona el campo de búsqueda por su atributo "name" y escribe una consulta
        cy.get('#APjFqb').type('Ejemplo de búsqueda en Cypress');

        // Presiona la tecla Enter para realizar la búsqueda
        cy.get('#APjFqb').type('{enter}');

        // Verifica que los resultados de la búsqueda se muestren en la página
        // cy.get('#search').should('be.visible');
        cy.contains('Imágenes').click();
        cy.get('.rg_i').eq(2).click();
        cy.wait(1000);
        cy.get('#R5mgy').click();

        //cargar foto
        //    cy.fixture('hero.png').then(fileContent => {
        //        cy.get('.DV7the').attachFile({
        //          fileContent: fileContent,
        //          fileName: 'hero.png',
        //          mimeType: 'image/png',
        //        });
        // });
    })
});
