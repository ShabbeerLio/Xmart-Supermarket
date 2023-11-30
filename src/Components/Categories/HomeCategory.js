import React, { useState, useEffect } from 'react';
import Categories from './CategoriesData';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./HomeCategory.css"
import Slider from 'react-slick';

const HomeCategory = (props) => {
    // const [categories, setCategories] = useState(Categories);
    const [selectedCategory, setSelectedCategory] = useState(Categories[2]);

    const handleCategoryClick = (item) => {
        setSelectedCategory(item);
        
    };

    const [selectedSubcategory, setSelectedSubcategory] = useState();

    useEffect(() => {
        if (selectedCategory && selectedCategory.subCategories.length > 0) {
            setSelectedSubcategory(selectedCategory.subCategories);
        }
    }, [selectedCategory]);
    console.log(selectedSubcategory,"selected data")

    // slider
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>
        },
    }

    return (
        <div className="home-category-boxes">
            <ul className="home-category-left">
                {Categories.map((item) => (
                    <li key={item.id}
                        onClick={() => handleCategoryClick(item)}
                        className={item === selectedCategory ? 'selected' : ''}
                    >
                        <p>{item.category}</p>
                    </li>
                ))}
            </ul>

            {selectedCategory && (
                <div className="home-category-right">
                    <ul>
                        <Slider {...settings}>
                            {selectedCategory.subCategories.map((subCategory) => (

                                <div className="home-category-right-box">
                                    <div className="category-right-image">
                                        <img src={subCategory.cover} alt="" />
                                    </div>
                                    <li key={subCategory.id}>
                                        <p>{subCategory.subCategory}</p>
                                    </li>
                                    <div className="home-category-button">
                                            <p>Explore</p>
                                            <svg width="1em" color="wheat" height="1em" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props}>
                                                <path fill="#000000" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z"></path>
                                            </svg>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HomeCategory;
