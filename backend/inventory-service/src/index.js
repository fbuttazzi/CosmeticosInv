(async () => {
    require("dotenv-safe").config();
    const inventories = require('./api/inventory');
    const server = require("./server/server");
    const repository = require("./repository/repository");

    try {
        await server.start(inventories, repository);
        console.log('Server is up and running at ' + process.env.PORT)
    } catch (error) {
        console.error(error);
    }
})();