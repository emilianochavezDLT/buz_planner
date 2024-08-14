import request from 'supertest' // Import supertest for testing the API
import app from '../app.js'// Import app for testing
import { expect } from 'chai'; // Import chai for assertions

describe('POST and GET ./users/createUser', () => {

    //This is the Post request to create a user
    it('should create a new user', async () => {
        let userId;

        // Send a POST request to the app
        const create_user = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'jd@mail.com'
        };
        
        // This is the expected response
        const res = await request(app)
            .post('/users/createUser') //Post to the createUser route
            .send(create_user) // Send the user object
            .expect(201); // Expect a 201 response
            
        // Assertions
        expect(res.body).to.have.property('id'); // Expect the response to have an ID
        expect(res.body.firstName).to.equal(create_user.firstName); // Expect the response to have the same first name
        expect(res.body.lastName).to.equal(create_user.lastName); // Expect the response to have the same last name
        expect(res.body.email).to.equal(create_user.email); // Expect the response to have the same email
        

        // The ID of the created user is in the response body
        userId = res.body.id; // Set the userId to the ID of the created user
    });

    //This is the Get request to get a user by ID
    it('should get a user by ID', async () => {
        const res = await request(app)
            .get(`/users/getUserById/${userId}`)
            .expect(200);

        expect(res.body).to.have.property('id', userId);
        expect(res.body.firstName).to.equal('John');
        expect(res.body.lastName).to.equal('Doe');
        expect(res.body.email).to.equal('john.doe@example.com');
    });
                

});