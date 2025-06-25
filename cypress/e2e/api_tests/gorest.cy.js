// WEEK 7 ASSIGNMENT - QUALITY ASSURANCE
// NAMA : BRYAN VERNANDA
// NIM  : 2501960120

describe('API Testing on reqres.in with simplified requests', () => {
    let userId;

    // Test Case 1: GET - Ambil daftar pengguna
    it('Get All Users', () => {
        cy.apiRequest('GET', '/public/v2/users').then((response) => {
            // Verifikasi status code 200
            expect(response.status).to.eq(200);

            // Verifikasi response body adalah array
            expect(response.body).to.be.an('array');
        });
    });

    // Test Case 2: POST - Buat pengguna baru
    it('Register New User', () => {
        const requestBody = {
            name: 'Bryan Vernanda',
            email: 'bryan.vernanda2003@gmail.com',
            gender: 'male',
            status: 'active'
        };

        cy.apiRequest('POST', '/public/v2/users', {
            body: requestBody,
        }).then((response) => {
            // Verifikasi status code 201
            expect(response.status).to.eq(201);

            // Verifikasi data pengguna yang dibuat sesuai dengan yang dikirim
            expect(response.body).to.have.property('name', requestBody.name);
            expect(response.body).to.have.property('email', requestBody.email);
            expect(response.body).to.have.property('gender', requestBody.gender);
            expect(response.body).to.have.property('status', requestBody.status);

            userId = response.body.id;
        });
    });

    // Test Case 3: PUT - Perbaharui informasi pengguna yang telah dibuat
    it('Update User Data', () => {
        const updatedBody = {
            name: 'Bryan V.',
            email: 'bryan2003@gmail.com'
        };

        cy.apiRequest('PUT', `/public/v2/users/${userId}`, {
            body: updatedBody,
        }).then((response) => {
            // Verifikasi status code 200
            expect(response.status).to.eq(200);

            // Verifikasi data pengguna berhasil diperbarui
            expect(response.body).to.have.property('name', updatedBody.name);
            expect(response.body).to.have.property('email', updatedBody.email);
        });
    });

    // Test Case 4: DELETE - Hapus pengguna yang telah dibuat
    it('Delete User Data', () => {
        cy.apiRequest('DELETE', `/public/v2/users/${userId}`).then((response) => {
            // Verifikasi status code 204
            expect(response.status).to.eq(204);
        });
    });

});
