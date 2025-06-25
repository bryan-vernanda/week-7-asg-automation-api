describe('API Testing on reqres.in with simplified requests', () => {
    // Test Case 1: POST - Create a new user
    it('should create a new user successfully', () => {
        cy.apiRequest('POST', '/users', {
            body: {
                name: 'John Doe',
                job: 'Software Engineer',
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('name', 'John Doe');
            expect(response.body).to.have.property('job', 'Software Engineer');
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('createdAt');
        });
    });
});