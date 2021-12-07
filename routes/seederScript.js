require('dotenv').config();

const productsData = require('../data/products');
const connectDB = require('../config/db');
const Product = require('../models/Product');

const importData = async () => {
    try {
        await connectDB();
        await Product.deleteMany({});
        await Product.insertMany(productsData);
        console.log("Data import SUCCESS");
        process.exit();
    } catch (error) {
        console.error(`Error with data import: ${error}`);
        process.exit(1);
    }
}
importData();

module.exports = importData;