import React from 'react';
import { motion } from 'framer-motion';
import { FiPackage, FiTag, FiInfo } from 'react-icons/fi';
import './ProductCard.css';

const ProductCard = ({ product, onClick }) => {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    const handleClick = () => {
        onClick();
    };

    return (
        <motion.div 
            className="product-card"
            onClick={handleClick}
            whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
            }}
            transition={{ duration: 0.3 }}
        >
            <div className="product-image-container">
                <img 
                    src={product.image.startsWith('data:image') 
                        ? product.image 
                        : product.image.startsWith('http') 
                            ? product.image 
                            : `http://localhost:3002${product.image}`} 
                    alt={product.name}
                    className="product-image"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=Product+Image';
                    }}
                />
                {product.prescriptionRequired && (
                    <div className="prescription-badge">
                        <FiInfo />
                        <span>Prescription Required</span>
                    </div>
                )}
                {product.discount && (
                    <div className="discount-badge">
                        <FiTag />
                        <span>{product.discount}% OFF</span>
                    </div>
                )}
            </div>

            <div className="product-info">
                <div className="product-header">
                    <h3 className="product-name">{product.name}</h3>
                    <span className="product-brand">{product.brand}</span>
                </div>

                <p className="product-description">
                    {product.description.length > 100 
                        ? `${product.description.substring(0, 100)}...` 
                        : product.description
                    }
                </p>

                <div className="product-meta">
                    <div className="product-category">
                        <FiPackage />
                        <span>{product.category}</span>
                    </div>
                    
                    {product.stockQuantity > 0 ? (
                        <span className="stock-status in-stock">
                            In Stock ({product.stockQuantity})
                        </span>
                    ) : (
                        <span className="stock-status out-of-stock">
                            Out of Stock
                        </span>
                    )}
                </div>

                <div className="product-price-section">
                    <div className="price-container">
                        {product.originalPrice && product.originalPrice > product.price && (
                            <span className="original-price">
                                {formatPrice(product.originalPrice)}
                            </span>
                        )}
                        <span className="current-price">
                            {formatPrice(product.price)}
                        </span>
                    </div>
                    
                    <div className="card-buttons">
                        <button className="view-details-btn">
                            <FiInfo />
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard; 