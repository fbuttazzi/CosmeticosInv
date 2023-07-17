require('dotenv-safe').config();
const database = require('./database');

test('MongoDB connection', async() => {
    const connection = await database.connect();
    expect(connection).toBeTruthy();

})
test('MongoDB Disconnection', async () => {
    const isDisconnected = await database.disconnect();
    expect(isDisconnected).toBeTruthy();
})