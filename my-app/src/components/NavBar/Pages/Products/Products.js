import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiGrid, FiList } from 'react-icons/fi';
import ProductCard from './ProductCard/ProductCard';
import ProductTooltip from './ProductTooltip/ProductTooltip';
import { sampleProducts } from './data/sampleProducts';
import './Products.css';

const Products = () => {
    const [products] = useState(sampleProducts);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedBrand, setSelectedBrand] = useState('all');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
    const [prescriptionNeeded, setPrescriptionNeeded] = useState('all');
    const [sortBy, setSortBy] = useState('name');
    const [viewMode, setViewMode] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showTooltip, setShowTooltip] = useState(false);

    const productsPerPage = 12;

    // Get unique categories and brands for filters
    const categories = useMemo(() => {
        const uniqueCategories = [...new Set(products.map(product => product.category))];
        return ['all', ...uniqueCategories];
    }, [products]);

    const brands = useMemo(() => {
        const uniqueBrands = [...new Set(products.map(product => product.brand))];
        return ['all', ...uniqueBrands];
    }, [products]);

    // Filter and sort products
    const processedProducts = useMemo(() => {
        let filtered = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                product.brand.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
            const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
            const matchesPrescription = prescriptionNeeded === 'all' || 
                                      (prescriptionNeeded === 'yes' && product.prescriptionRequired) ||
                                      (prescriptionNeeded === 'no' && !product.prescriptionRequired);

            return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesPrescription;
        });

        // Sort products
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'brand':
                    return a.brand.localeCompare(b.brand);
                default:
                    return 0;
            }
        });

        return filtered;
    }, [products, searchTerm, selectedCategory, selectedBrand, priceRange, prescriptionNeeded, sortBy]);

    // Pagination
    const totalPages = Math.ceil(processedProducts.length / productsPerPage);
    const currentProducts = processedProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    // Debounced search
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentPage(1);
        }, 300);

        return () => clearTimeout(timer);
    }, [searchTerm, selectedCategory, selectedBrand, priceRange, prescriptionNeeded, sortBy]);

    // Handle product click for tooltip
    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setShowTooltip(true);
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    };

    const handleCloseTooltip = () => {
        setShowTooltip(false);
        setSelectedProduct(null);
        // Restore body scroll
        document.body.style.overflow = 'unset';
    };

    return (
        <div className="products-container">
            {/* Header */}
            <motion.div 
                className="products-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>Our Products</h1>
                <p>Discover our comprehensive range of pet healthcare products</p>
            </motion.div>

            {/* Search and Filters */}
            <motion.div 
                className="filters-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {/* Search Bar */}
                <div className="search-container">
                    <FiSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>

                {/* Filter Controls */}
                <div className="filter-controls">
                    <div className="filter-group">
                        <label>Category:</label>
                        <select 
                            value={selectedCategory} 
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>
                                    {category === 'all' ? 'All Categories' : category}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Brand:</label>
                        <select 
                            value={selectedBrand} 
                            onChange={(e) => setSelectedBrand(e.target.value)}
                        >
                            {brands.map(brand => (
                                <option key={brand} value={brand}>
                                    {brand === 'all' ? 'All Brands' : brand}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Price Range:</label>
                        <div className="price-range">
                            <input
                                type="number"
                                placeholder="Min"
                                value={priceRange.min}
                                onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                            />
                            <span>-</span>
                            <input
                                type="number"
                                placeholder="Max"
                                value={priceRange.max}
                                onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                            />
                        </div>
                    </div>

                    <div className="filter-group">
                        <label>Prescription:</label>
                        <select 
                            value={prescriptionNeeded} 
                            onChange={(e) => setPrescriptionNeeded(e.target.value)}
                        >
                            <option value="all">All Products</option>
                            <option value="yes">Prescription Required</option>
                            <option value="no">No Prescription</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Sort By:</label>
                        <select 
                            value={sortBy} 
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="name">Name</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="brand">Brand</option>
                        </select>
                    </div>

                    <div className="view-toggle">
                        <button 
                            className={viewMode === 'grid' ? 'active' : ''}
                            onClick={() => setViewMode('grid')}
                        >
                            <FiGrid />
                        </button>
                        <button 
                            className={viewMode === 'list' ? 'active' : ''}
                            onClick={() => setViewMode('list')}
                        >
                            <FiList />
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Results Summary */}
            <motion.div 
                className="results-summary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <p>Showing {currentProducts.length} of {processedProducts.length} products</p>
            </motion.div>

            {/* Products Grid */}
            <motion.div 
                className={`products-grid ${viewMode}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                {currentProducts.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ProductCard
                            product={product}
                            onClick={() => handleProductClick(product)}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
                <motion.div 
                    className="pagination"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <button 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={currentPage === page ? 'active' : ''}
                        >
                            {page}
                        </button>
                    ))}
                    
                    <button 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </motion.div>
            )}

            {/* Product Tooltip */}
            {showTooltip && selectedProduct && (
                <ProductTooltip
                    product={selectedProduct}
                    onClose={handleCloseTooltip}
                />
            )}
        </div>
    );
};

export default Products; 