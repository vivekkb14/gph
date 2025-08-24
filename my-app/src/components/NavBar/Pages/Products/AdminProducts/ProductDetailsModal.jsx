import React from 'react';
import './ProductDetailsModal.css';

const ProductDetailsModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                
                <div className="modal-body">
                    <div className="modal-image-container">
                        <img 
                            src={product.image ? 
                                (product.image.startsWith('product-images/') ? 
                                    `http://localhost:3002/${product.image}` : 
                                    product.image
                                ) : 
                                'https://via.placeholder.com/300x200?text=No+Image'
                            } 
                            alt={product.name}
                            className="modal-image"
                            onError={(e) => {
                                if (e.target.src !== 'https://via.placeholder.com/300x200?text=No+Image') {
                                    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                                }
                            }}
                        />
                    </div>
                    
                    <div className="product-details">
                        <h2>{product.name}</h2>
                        
                        <div className="detail-row">
                            <span className="label">Price:</span>
                            <span className="value">₹{product.price}</span>
                        </div>
                        
                        {product.originalPrice && (
                            <div className="detail-row">
                                <span className="label">Original Price:</span>
                                <span className="value">₹{product.originalPrice}</span>
                            </div>
                        )}
                        
                        {product.discount && (
                            <div className="detail-row">
                                <span className="label">Discount:</span>
                                <span className="value">{product.discount}%</span>
                            </div>
                        )}
                        
                        <div className="detail-row">
                            <span className="label">Brand:</span>
                            <span className="value">{product.brand}</span>
                        </div>
                        
                        <div className="detail-row">
                            <span className="label">Category:</span>
                            <span className="value">{product.category}</span>
                        </div>
                        
                        {product.stockQuantity !== undefined && (
                            <div className="detail-row">
                                <span className="label">Stock Quantity:</span>
                                <span className="value">{product.stockQuantity}</span>
                            </div>
                        )}
                        
                        {product.rating && (
                            <div className="detail-row">
                                <span className="label">Rating:</span>
                                <span className="value">{product.rating} ⭐</span>
                            </div>
                        )}
                        
                        <div className="detail-row description">
                            <span className="label">Description:</span>
                            <span className="value">{product.description}</span>
                        </div>
                        
                        {product.ingredients && (
                            <div className="detail-row">
                                <span className="label">Ingredients:</span>
                                <span className="value">{product.ingredients}</span>
                            </div>
                        )}
                        
                        {product.dosage && (
                            <div className="detail-row">
                                <span className="label">Dosage:</span>
                                <span className="value">{product.dosage}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsModal;
