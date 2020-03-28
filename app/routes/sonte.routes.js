module.exports = (app) => {
    const sonte = require('../controllers/sonte.controller.js');

    // Create
    app.post('/sonte', sonte.create);

    // Update, Edit
    app.put('/sonte/:sonteId', sonte.update);

    // Delete, remove
    app.delete('/sonte/:sonteId', sonte.delete);

    // Retrieve All
    app.get('/sonte', sonte.getAll);

    // Retrieve single node
    app.get('/sonte/:sonteId', sonte.get)

}