
describe('Broken links Test', function () {
    it('Verifies and identifies broken links', function () {
        cy.visit('https://example.cypress.io/')
        cy.get('a').each(($el, index, $list) => {
            const href = $el.prop('href')
            cy.request(href)
                .should((response) => {
                    expect(response.status).to.eq(200)

                })
        })
    })
})
