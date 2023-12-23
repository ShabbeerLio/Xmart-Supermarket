import React, { useEffect, useState } from 'react';
import Categories from '../../Components/Datas/CategoriesData';
import "./Productes.css";
import TopBrandsData from '../../Components/Datas/TopBrandsData';
import ProductCard from '../../Components/ProductCard/ProductCard';

const Products = (props) => {
  const [selectedCategories, setSelectedCategories] = useState([Categories[0]]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleCategoryClick = (item) => {
    const updatedCategories = selectedCategories.includes(item)
      ? selectedCategories.filter((category) => category !== item)
      : [...selectedCategories, item];

    setSelectedCategories(updatedCategories);
    setSelectedBrands([]);
  };

  const handleBrandClick = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      : [...selectedBrands, brand];

    setSelectedBrands(updatedBrands);
  };

  const handleDeleteCategory = (category) => {
    const updatedCategories = selectedCategories.filter((c) => c !== category);
    setSelectedCategories(updatedCategories);
  };

  const handleDeleteBrand = (brand) => {
    const updatedBrands = selectedBrands.filter((b) => b !== brand);
    setSelectedBrands(updatedBrands);
  };

  useEffect(() => {
    const subcategories = selectedCategories.flatMap((category) => category.subCategories);
    setSelectedSubcategories(subcategories);
  }, [selectedCategories]);

  const [selectedPrice, setSelectedPrice] = useState(null);

  const handlePriceClick = (price) => {
    setSelectedPrice(price);
  };

  const handleClearPriceFilter = () => {
    setSelectedPrice(null);
  };

  // console.log(selectedPrice, "price")

  // sort
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };


  return (
    <div className='product-page'>
      <ul className="product-page-left">
        <h4>Filter</h4>
        <div className='category-box-filter'>
          {selectedCategories.map((category) => (
            <li key={category.id}>
              <div className="filter-box">
                <p>{category.category}</p>
                <span onClick={() => handleDeleteCategory(category)}>x</span>
              </div>
            </li>
          ))}
          {selectedBrands.map((brand) => (
            <li key={brand}>
              <div className="filter-box">
                <p>{brand}</p>
                <span onClick={() => handleDeleteBrand(brand)}>x</span>
              </div>
            </li>
          ))}
          {selectedPrice && (
            <li>
              <div className="filter-box">
                <p>{`$${selectedPrice.min} - $${selectedPrice.max === Infinity ? 'Infinity' : selectedPrice.max}`}</p>
                <span onClick={handleClearPriceFilter}>x</span>
              </div>
            </li>
          )}
        </div>
        <h4>Category</h4>
        <div className='category-box'>
          {Categories.map((item) => (
            <li
              key={item.id}
              onClick={() => handleCategoryClick(item)}
              className={selectedCategories.includes(item) ? 'selected' : ''}
            >
              <p>{item.category}</p>
            </li>
          ))}
        </div>
        <h4>Brands</h4>
        <div className='category-box'>
          {TopBrandsData.map((item) => (
            <li
              key={item.id}
              onClick={() => handleBrandClick(item.brand)}
              className={selectedBrands.includes(item.brand) ? 'selected' : ''}
            >
              <p>
                {item.brand}
              </p>
            </li>
          ))}
        </div>
        <h4>Price</h4>
        <div className='category-box'>
          <li onClick={() => handlePriceClick({ min: 0, max: 100 })} className={selectedPrice && selectedPrice.min === 0 && selectedPrice.max === 100 ? 'selected' : ''}>
            <p>
              Below $100
            </p>
          </li>
          <li onClick={() => handlePriceClick({ min: 300, max: 400 })} className={selectedPrice && selectedPrice.min === 300 && selectedPrice.max === 400 ? 'selected' : ''}>
            <p>
              $300 - $400
            </p>
          </li>
          <li onClick={() => handlePriceClick({ min: 400, max: 700 })} className={selectedPrice && selectedPrice.min === 400 && selectedPrice.max === 700 ? 'selected' : ''}>
            <p>
              $400 - $700
            </p>
          </li>
          <li onClick={() => handlePriceClick({ min: 700, max: 999 })} className={selectedPrice && selectedPrice.min === 700 && selectedPrice.max === 999 ? 'selected' : ''}>
            <p>
              $700 - $999
            </p>
          </li>
          <li onClick={() => handlePriceClick({ min: 1000, max: Infinity })} className={selectedPrice && selectedPrice.min === 1000 && selectedPrice.max === Infinity ? 'selected' : ''}>
            <p>
              Above $1000
            </p>
          </li>
        </div>
      </ul>
      {selectedSubcategories.length > 0 ? (
        <div className="product-page-right">
          <div className="product-page-sort">
            <div className="product-number">
              <p>{selectedSubcategories.filter(
                (item) =>
                  (selectedBrands.length === 0 || selectedBrands.includes(item.brand)) &&
                  (selectedPrice === null || (item.price >= selectedPrice.min && item.price <= selectedPrice.max))
              ).length}</p><p>Items</p>
            </div>
            <div className="product-sort-dropdown">
              <div className="product-sort" onClick={toggleDropdown}>
                {selectedOption || 'Sort Option'}
                <div className="sort-icon">
                  <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                    <path fill="#000000" d="m7 10l5 5l5-5z"></path>
                  </svg>
                </div>
              </div>
              {isOpen && (
                <div className="dropdown-options">
                  <div onClick={() => handleOptionClick('Newest')}>Newest</div>
                  <div onClick={() => handleOptionClick('Popularity')}>Popularity</div>
                  <div onClick={() => handleOptionClick('Price : Low to High')}>Price : Low to High</div>
                  <div onClick={() => handleOptionClick('Price : High to Low')}>Price : High to Low</div>
                </div>
              )}

            </div>
          </div>
          <ul>
            {selectedSubcategories
              .filter(
                (item) =>
                  (selectedBrands.length === 0 || selectedBrands.includes(item.brand)) &&
                  (selectedPrice === null ||
                    (selectedPrice.min <= item.price && item.price <= selectedPrice.max))
              )
              .sort((a, b) => {
                // console.log('Sorting', a, b, selectedOption);
                switch (selectedOption) {
                  case 'Newest':
                    return new Date(b.date) - new Date(a.date);
                  case 'Price: Low to High':
                    return a.price - b.price;
                  case 'Price: High to Low':
                    return b.price - a.price;
                  default:
                    return 0; // No sorting
                }
              })
              .map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  cover={item.cover}
                  name={item.subCategory}
                  price={item.price}
                  description={item.description}
                />
              ))}
          </ul>
        </div>
      ) : (
        <div className="no-products-found">
          <p>No products found</p>
        </div>
      )}
    </div>
  );
};

export default Products;
