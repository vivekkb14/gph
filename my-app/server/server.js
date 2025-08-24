import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const productsFilePath = path.join(__dirname, 'products.json');
const productsFilePath = path.join(__dirname, '../src/components/NavBar/Pages/Products/data/sampleProducts.js');

const app = express();
const port = 3002; // Changed to 3002 to avoid conflict with Vite

// Enable CORS for development
app.use(cors({
    origin: ['http://localhost:3001', 'http://localhost:5173'], // Allow both React dev servers
    credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/product-images', express.static(path.join(__dirname, '../public/product-images')));

// Configure multer for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, '../public/product-images');
        // Create directory if it doesn't exist
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        // Generate unique filename
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// API Routes
app.get('/api/products', (req, res) => {
    try {
        const products = readProductsFile();
        res.json(products);
    } catch (error) {
        console.error('Error reading products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

app.delete('/api/products/:id', (req, res) => {
    try {
        let products = readProductsFile();
        const productId = req.params.id;
        products = products.filter(p => p._id !== productId);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.json({ success: true });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Failed to delete product' });
    }
});

// Function to read and write products file
const productsJsonPath = path.join(__dirname, 'products.json');
const sampleProductsPath = path.join(__dirname, '../src/components/NavBar/Pages/Products/data/sampleProducts.js');

const readProductsFile = () => {
    try {
        let products = [];
        
        // Read from sampleProducts.js
        if (fs.existsSync(sampleProductsPath)) {
            const sampleContent = fs.readFileSync(sampleProductsPath, 'utf8');
            const match = sampleContent.match(/export const sampleProducts = (\[[\s\S]*\]);/);
            if (match) {
                products = JSON.parse(match[1]);
            }
        }
        
        // Read from products.json and merge
        if (fs.existsSync(productsJsonPath)) {
            const jsonContent = fs.readFileSync(productsJsonPath, 'utf8');
            const jsonProducts = JSON.parse(jsonContent);
            products = [...products, ...jsonProducts];
        } else {
            fs.writeFileSync(productsJsonPath, '[]', 'utf8');
        }
        
        return products;
    } catch (error) {
        console.error('Error reading products file:', error);
        return [];
    }
};

const writeProductsFile = (products) => {
    try {
        console.log('calling writeProductsFile')
        const fileContent = `export const sampleProducts = ${JSON.stringify(products, null, 2)};`;
        console.log('Writing products to file:', productsFilePath);
        fs.writeFileSync(productsFilePath, fileContent, 'utf8');
        return true;
    } catch (error) {
        console.error('Error writing products file:', error);
        return false;
    }
};

// Handle product creation with base64 image
app.post('/api/upload', (req, res) => {
    try {
        const product = req.body;
        
        // Read existing products
        const products = readProductsFile();
        
        // Check if product with same name already exists
        const productExists = products.some(p => p.name.toLowerCase() === product.name.toLowerCase());
        
        if (productExists) {
            return res.status(400).json({
                success: false,
                error: 'A product with this name already exists'
            });
        }
        
        // Add new product
        products.push(product);
        
        // Write updated products back to file
        if (writeProductsFile(products)) {
            res.json({ 
                success: true, 
                product: product
            });
        } else {
            throw new Error('Failed to write products file');
        }
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Failed to upload file' });
    }
});

// Serve static files from public directory
app.use('/product-images', express.static(path.join(__dirname, '../public/product-images')));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
