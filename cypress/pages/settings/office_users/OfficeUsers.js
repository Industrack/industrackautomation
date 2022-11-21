class OfficeUsers {
    elements = {
        button: () => cy.get('input[formcontrolname="customerName"]'),

    }

    loginAdmin = () => {

    }
}

module.exports = new OfficeUsers();