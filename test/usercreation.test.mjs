import request from 'supertest' // Import supertest for testing the API
import app from '../app.js'// Import app for testing
import { expect } from 'chai'; // Import chai for assertions
import e from 'express';


//Giving the userId a global scope
let userId;

// This is the test suite for the user creation
describe('POST ./users/createUser', () => {

    //This is the Post request to create a user
    it('should create a new user', async () => {
        

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

});

describe('POST ./users/createUser', () => {

    it('should return an error for missing user fields', async () => {
        const create_user = {
            firstName: 'John',
            lastName: 'Doe'
        };

        const res = await request(app)
            .post('/users/createUser')
            .send(create_user)

        expect(res.body).to.have.property('error');
        expect(res.body.error).to.equal('Please provide all the required fields');
    });

    it('should return an error for an invalid email', async () => {
        const create_user = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'jdmail.com'
        };

        const res = await request(app)
            .post('/users/createUser')
            .send(create_user)

        expect(res.body).to.have.property('error');
        expect(res.body.error).to.equal('Please provide a valid email address');
    })

});


//Testing the GET request to get a user by ID
describe('GET ./users/getUserById/:id', () => {
    it('should get a user by ID', async () => {
        const res = await request(app) // Send a GET request to the app
            .get(`/users/getUserById/${userId}`) // Get the user by ID
            .expect(200); // Expect a 200 response

        expect(res.body).to.have.property('id', userId);
        expect(res.body.firstName).to.equal('John');
        expect(res.body.lastName).to.equal('Doe');
        expect(res.body.email).to.equal('jd@mail.com');
    })
});

describe('POST ./auth/logIn', () => {

    it('should sign in a user', async () => {
        const user = {
            firstName: 'Jane',
            lastName: 'Foster',
            email: 'jf@mail.com'
        };

        const res = await request(app)
            .post('/auth/logIn')
            .send(user)
            .expect(200);

        expect(res.body).to.have.property('accessToken');
    });

    it('should return an error for missing user fields', async () => {
        const user = {
            firstName: 'Jane',
            lastName: 'Foster'
        };

        const res = await request(app)
            .post('/auth/logIn')
            .send(user);

        expect(res.body).to.have.property('error');
        expect(res.body.error).to.equal('Please provide all the required fields');
    });

    it('should return an error for an invalid email', async () => {
        const user = {
            firstName: 'Jane',
            lastName: 'Foster',
            email: 'jfmail.com'
        };

        const res = await request(app)
            .post('/auth/logIn')
            .send(user);

        expect(res.body).to.have.property('error');
        expect(res.body.error).to.equal('Please provide a valid email address');
    });

    it('should return an error for a user not found', async () => {
        const user = {
            firstName: 'Jane',
            lastName: 'Foster',
            email: 'janefoster@mail.com'
        };

        const res = await request(app)
            .post('/auth/logIn')
            .send(user);

        expect(res.body).to.have.property('error');
        expect(res.body.error).to.equal('Try Again');
    });

});