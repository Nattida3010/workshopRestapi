var express = require('express');
var app = express();
var db = require('./database.js') //connect database
var cors = require('cors')
app.use(cors())




var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));

//Add  rounting 
app.get('/', function (req, res) {
    res.send('Express is running');
});
var output = {
    status: 'success',
    message: 'REST API is working'
}
app.get('/api/json', function (req, res) {
    res.status(500).json(output);
});

app.get('/api/products/', db.getAllProducts)
app.get('/api/products/:id', db.getProductByID)
app.post('/api/products/', db.insertProduct);
app.put('/api/products/:id', db.updateProduct);
app.delete('/api/products/:id', db.deleteProduct);

app.get('/api/purchase_item', db.getPurchase_item);
app.get('/api/purchase_item/:id', db.getPurchase_itemByID);
app.post('/api/purchase_item', db.insertPurchase_item);
app.post('/api/purchase_item/:id', db.updatePurchase_item);
app.post('/api/purchase_item/delete/:id', db.DeletePurchase_item);

app.get('/api/purchase', db.getPurchase);
app.get('/api/purchase/:id', db.getPurchaseByID);
app.post('/api/purchase', db.insertPurchase);
app.post('/api/purchase/:id', db.updatePurchase);
app.post('/api/purchase/delete/:id', db.DeletePurchase);

app.get('/api/User', db.getUser);
app.get('/api/User/:id', db.getUserByID);
app.post('/api/User', db.insertUser);
app.post('/api/User/:id', db.updateUser);
app.post('/api/User/delete/:id', db.DeleteUser);

// index page
app.get('/', function (req, res) {
    res.send('Express is running');
    });
    app.get('/api/json', function (req, res) {
       var test={emp:"emp",active:"activate",time:"5"}
    res.json(test);
        });
    
    var port = process.env.PORT || 8080;
    app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
    });