require('dotenv-safe').config();
const supertest = require('supertest');
const inventories = require('./inventory');
const server = require('../server/server');
const repository = require('../repository/repository');

var testId = null;
let app = null;

beforeAll(async () => {
    app = await server.start(inventories, repository);
    const result = await repository.getAllInventory();
    testId = `${result[0]._id}`;
})

afterAll(async () => {
    await server.stop();
})

test('GET /produtos', async() => {
    const response = await supertest(app).get('/produtos');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toBeGreaterThan(0);
})

test('GET /produtos/:id', async () => {
    const response = await supertest(app).get('/produtos/'+testId);
    
    expect(response.status).toEqual(200);
    expect(response.body).toBeTruthy();
    expect(response.body._id).toEqual(testId);
})

test('GET /produtos/avencer', async () => {
    const response = await supertest(app).get('/produtos/avencer');

    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toBeGreaterThan(0);

})