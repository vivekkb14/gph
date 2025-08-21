import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPackage, FiTag, FiInfo, FiStar } from 'react-icons/fi';
import './ProductTooltip.css';

const ProductTooltip = ({ product, onClose }) => {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    // Close tooltip when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.product-tooltip')) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    // Close tooltip on escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    return (
        <AnimatePresence>
            <motion.div
                className="tooltip-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <motion.div
                    className="product-tooltip"
                    initial={{ 
                        opacity: 0, 
                        scale: 0.8,
                        y: 50
                    }}
                    animate={{ 
                        opacity: 1, 
                        scale: 1,
                        y: 0
                    }}
                    exit={{ 
                        opacity: 0, 
                        scale: 0.8,
                        y: 50
                    }}
                    transition={{ 
                        duration: 0.3,
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                    }}
                >
                    <button className="close-btn" onClick={onClose}>
                        <FiX />
                    </button>

                    <div className="tooltip-content">
                        <div className="tooltip-image-section">
                            <img 
                                src={product.image} 
                                alt={product.name}
                                className="tooltip-image"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/400x300?text=Product+Image';
                                }}
                            />
                            {product.prescriptionRequired && (
                                <div className="tooltip-prescription-badge">
                                    <FiInfo />
                                    <span>Prescription Required</span>
                                </div>
                            )}
                        </div>

                        <div className="tooltip-info">
                            <div className="tooltip-header">
                                <h2 className="tooltip-product-name">{product.name}</h2>
                                <span className="tooltip-brand">{product.brand}</span>
                            </div>

                            <div className="tooltip-rating">
                                {[...Array(5)].map((_, i) => (
                                    <FiStar 
                                        key={i} 
                                        className={i < (product.rating || 0) ? 'star filled' : 'star'}
                                    />
                                ))}
                                <span className="rating-text">
                                    ({product.rating || 0}/5)
                                </span>
                            </div>

                            <p className="tooltip-description">
                                {product.description}
                            </p>

                            <div className="tooltip-details">
                                <div className="detail-item">
                                    <FiPackage />
                                    <span><strong>Category:</strong> {product.category}</span>
                                </div>
                                
                                <div className="detail-item">
                                    <FiTag />
                                    <span><strong>Brand:</strong> {product.brand}</span>
                                </div>

                                {product.ingredients && (
                                    <div className="detail-item">
                                        <FiInfo />
                                        <span><strong>Ingredients:</strong> {product.ingredients}</span>
                                    </div>
                                )}

                                {product.dosage && (
                                    <div className="detail-item">
                                        <FiInfo />
                                        <span><strong>Dosage:</strong> {product.dosage}</span>
                                    </div>
                                )}

                                <div className="detail-item">
                                    <FiInfo />
                                    <span><strong>Stock:</strong> {product.stockQuantity} units available</span>
                                </div>
                            </div>

                            <div className="tooltip-price-section">
                                <div className="price-info">
                                    {product.originalPrice && product.originalPrice > product.price && (
                                        <div className="original-price-info">
                                            <span className="original-price">
                                                {formatPrice(product.originalPrice)}
                                            </span>
                                            {product.discount && (
                                                <span className="discount-amount">
                                                    Save {formatPrice(product.originalPrice - product.price)}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                    <span className="current-price">
                                        {formatPrice(product.price)}
                                    </span>
                                </div>

                                <div className="tooltip-actions">
                                    <button className="contact-btn">
                                        Contact for Purchase
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProductTooltip; 