import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductDetailsModal from './ProductDetailsModal';
import './AdminProducts.css';

const AdminProducts = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch('http://localhost:3002/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                console.log('Fetched products:', data);
                setProducts(data);
                setError(null);
            } catch (err) {
                console.error('Error fetching products:', err);
                setError('Failed to load products. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = async (productId) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                const response = await fetch(`http://localhost:3002/api/products/${productId}`, {
                    method: 'DELETE'
                });

                if (response.ok) {
                    // Remove the deleted product from the state
                    setProducts(products.filter(product => product._id !== productId));
                } else {
                    console.error('Failed to delete product');
                }
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    };

    if (loading) {
        return (
            <div className="admin-products-container">
                <h2>Loading products...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="admin-products-container">
                <h2>Error: {error}</h2>
                <button 
                    className="add-product-btn"
                    onClick={() => window.location.reload()}
                >
                    Retry
                </button>
            </div>
        );
    }

    if (!products || products.length === 0) {
        return (
            <div className="admin-products-container">
                <div className="admin-products-header">
                    <h1>Manage Products</h1>
                    <button 
                        className="add-product-btn"
                        onClick={() => navigate('/admin/products/add')}
                    >
                        Add New Product
                    </button>
                </div>
                <p>No products found. Click "Add New Product" to create one.</p>
            </div>
        );
    }

    return (
        <div className="admin-products-container">
            <div className="admin-products-header">
                <h1>Manage Products</h1>
                <button 
                    className="add-product-btn"
                    onClick={() => navigate('/admin/products/add')}
                >
                    Add New Product
                </button>
            </div>
            <div className="products-grid">
                {products.map(product => (
                    <div 
                        key={product._id || product.id} 
                        className="product-card"
                        onClick={() => setSelectedProduct(product)}
                    >
                        <div className="image-container">
                            <img 
                                src={product.image ? 
                                    (product.image.startsWith('product-images/') ? 
                                        `http://localhost:3002/${product.image}` : 
                                        product.image
                                    ) : 
                                    'https://via.placeholder.com/300x200?text=No+Image'
                                } 
                                alt={product.name}
                                className="product-image"
                                onError={(e) => {
                                    if (e.target.src !== 'https://via.placeholder.com/300x200?text=No+Image') {
                                        e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                                    }
                                }}
                                loading="lazy"
                            />
                        </div>
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p className="price">₹{product.price}</p>
                            <button 
                                className="delete-btn"
                                onClick={() => handleDelete(product._id)}
                            >
                                Delete Product
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProduct && (
                <ProductDetailsModal 
                    product={selectedProduct} 
                    onClose={() => setSelectedProduct(null)} 
                />
            )}
        </div>
    );
};

export default AdminProducts;
