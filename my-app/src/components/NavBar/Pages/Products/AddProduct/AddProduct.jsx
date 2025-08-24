import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';
import { sampleProducts } from '../data/sampleProducts';
import { v4 as uuidv4 } from 'uuid';

const AddProduct = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        brand: '',
        category: '',
        ingredients: '',
        dosage: '',
        image: null,
        imagePreview: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            // Create preview and optimize image
            const reader = new FileReader();
            reader.onloadend = () => {
                // Create an image element to resize
                const img = new Image();
                img.src = reader.result;
                img.onload = () => {
                    // Create canvas
                    const canvas = document.createElement('canvas');
                    const MAX_WIDTH = 800;
                    const MAX_HEIGHT = 800;
                    let width = img.width;
                    let height = img.height;

                    // Calculate new dimensions
                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height = height * (MAX_WIDTH / width);
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width = width * (MAX_HEIGHT / height);
                            height = MAX_HEIGHT;
                        }
                    }

                    // Resize image
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);

                    // Get compressed base64 string
                    const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
                    
                    setFormData(prevState => ({
                        ...prevState,
                        image: file,
                        imagePreview: compressedBase64
                    }));
                };
            };
            reader.readAsDataURL(file);
        }
    };

    const saveImage = async (file) => {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('http://localhost:3002/api/upload', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const data = await response.json();
            return data.path;
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error;
        }
    };

    const updateSampleProductsFile = async (products) => {
        try {
            const content = `export const sampleProducts = ${JSON.stringify(products, null, 2)};`;
            const filePath = 'src/components/NavBar/Pages/Products/data/sampleProducts.js';

            // Use run_in_terminal to write the file
            await new Promise((resolve, reject) => {
                const fs = require('fs');
                fs.writeFile(filePath, content, 'utf8', (err) => {
                    if (err) reject(err);
                    else resolve();
                });
            });
        } catch (error) {
            console.error('Error updating sampleProducts.js:', error);
            throw error;
        }
    };

    const calculateDiscount = (originalPrice, price) => {
        if (!originalPrice || originalPrice <= price) return null;
        return Math.round(((originalPrice - price) / originalPrice) * 100);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            let imagePath = '';
            if (formData.image) {
                // Convert image to base64 for consistent storage
                const base64Image = await new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.readAsDataURL(formData.image);
                });
                imagePath = base64Image;
            }

            const price = parseFloat(formData.price);
            const originalPrice = price + (price * 0.2); // Example: 20% higher original price
            const discount = calculateDiscount(originalPrice, price);

            const newProduct = {
                id: sampleProducts.length + 1,
                name: formData.name,
                description: formData.description,
                price: price,
                originalPrice: originalPrice,
                discount: discount,
                brand: formData.brand || "Generic",
                category: formData.category || "General",
                prescriptionRequired: false,
                stockQuantity: 45,
                rating: 4,
                image: formData.imagePreview, // Use the optimized base64 image
                ingredients: formData.ingredients || "Various ingredients",
                dosage: formData.dosage || "As directed"
            };

            const response = await fetch('http://localhost:3002/api/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to add product');
            }

            // Reset form
            setFormData({
                name: '',
                price: '',
                description: '',
                brand: '',
                category: '',
                ingredients: '',
                dosage: '',
                image: null,
                imagePreview: ''
            });

            alert('Product added successfully!');
            // Reset form for next entry
            setFormData({
                name: '',
                price: '',
                description: '',
                brand: '',
                category: '',
                ingredients: '',
                dosage: '',
                image: null,
                imagePreview: ''
            });
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product. Please try again.');
        }
    };

    return (
        <div className="add-product-container">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit} className="add-product-form">
                <div className="form-group">
                    <label htmlFor="name">Product Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price (₹):</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="brand">Brand:</label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Supplements">Supplements</option>
                        <option value="Medications">Medications</option>
                        <option value="Dental Care">Dental Care</option>
                        <option value="Grooming">Grooming</option>
                        <option value="First Aid">First Aid</option>
                        <option value="Behavioral">Behavioral</option>
                        <option value="Parasite Control">Parasite Control</option>
                        <option value="Eye Care">Eye Care</option>
                        <option value="Ear Care">Ear Care</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients:</label>
                    <textarea
                        id="ingredients"
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleInputChange}
                        placeholder="List the main ingredients"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dosage">Dosage/Usage:</label>
                    <textarea
                        id="dosage"
                        name="dosage"
                        value={formData.dosage}
                        onChange={handleInputChange}
                        placeholder="Enter dosage or usage instructions"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Product Image:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                    {formData.imagePreview && (
                        <div className="image-preview">
                            <img src={formData.imagePreview} alt="Preview" />
                        </div>
                    )}
                </div>

                <button type="submit" className="submit-button">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
