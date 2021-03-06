require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
connectDB();

const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

// Accessing the path module
const path = require("path");

if(process.env.NODE_ENV == "production"){
	app.use(express.static("frontend/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
	})
}


app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));