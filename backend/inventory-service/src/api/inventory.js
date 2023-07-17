module.exports = (app, repository) => {
    app.get('/produtos', async(req, res, next) => {
        const inventories = await repository.getAllInventory();
        if (!inventories || inventories.length === 0) return res.sendStatus(404);
        res.json(inventories);
    })
    app.get('/produtos/avencer', async(req, res, next) => {
        const inventories = await repository.getInventoryDueDate();
        if (!inventories || inventories.length === 0) return res.sendStatus(404);
        res.json(inventories);
    })

    app.get('/produtos/:id', async (req, res, next) => {
        const inventory = await repository.getInventoryById(req.params.id);
        if (!inventory) return res.sendStatus(404);
        res.json(inventory);
    })
}