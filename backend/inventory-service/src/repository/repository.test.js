require('dotenv-safe').config();
const repository = require('./repository');
let testId = null;

beforeAll(async()=>{
    const inventory = await repository.getAllInventory();
    testId = inventory[0]._id;
})

test('Repository GetAllInventory', async () =>{
    const inventories = await repository.getAllInventory();
    expect(Array.isArray(inventories)).toBeTruthy();
    expect(inventories.length).toBeGreaterThan(0);

})
test('Repository GetInventoryById', async () =>{
    const inventory = await repository.getInventoryById(testId);
    expect(inventory).toBeTruthy();
    expect(inventory._id).toEqual(testId);
})
test('Repository GetInventoryDueDate', async () => {
    const inventories = await repository.getInventoryDueDate();
    expect(Array.isArray(inventories)).toBeTruthy();
    expect(inventories.length).toBeGreaterThan(0);
})
test('Repository Disconnect', async () => {
    const isDisconnected = await repository.disconnect();
    expect(isDisconnected).toBeTruthy();
})