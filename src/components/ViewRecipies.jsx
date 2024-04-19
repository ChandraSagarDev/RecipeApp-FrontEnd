import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewRecipies = () => {
    const [data, changeData] = useState(
        [
            { "RecipeTitle": "Crispy Spring Rolls", "Desc": "A Popular Chinese snack of crispy rolls filled with a savory mixed vegetables stuffing.", "Category": "Veg", "By": "Dassana Amit", "Img": "https://www.vegrecipesofindia.com/wp-content/uploads/2015/10/spring-rolls-recipe-280x280.jpg" },
            { "RecipeTitle": "Paneer Tikka ", "Desc": "Paneer are marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven.", "Category": "Veg", "By": "Dassana Amit", "Img": "https://www.vegrecipesofindia.com/wp-content/uploads/2011/10/grilled-paneer-tikka-280x280.jpg" },
            { "RecipeTitle": "Classic Punjabi Samosa ", "Desc": "One of the most popular street food snack filled with savory and spiced potato and green peas.", "Category": "Veg", "By": "Dassana Amit", "Img": "https://www.vegrecipesofindia.com/wp-content/uploads/2013/11/samosa-0-280x280.jpg" },
            { "RecipeTitle": "Cheesy Pizza ", "Desc": "One of the most fun and easy dinners to make at home with just a few key tips.", "Category": "Non-Veg", "By": "Dassana Amit", "Img": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe-280x280.jpg" },
            { "RecipeTitle": "Mysore Masala Dosa ", "Desc": "It is a crispy, thin savory pancake with or without the humble potato filling or masala. Mysore Masala Dosa is one of the most popular ones.", "Category": "Veg", "By": "Dassana Amit", "Img": "https://www.vegrecipesofindia.com/wp-content/uploads/2013/05/mysore-masala-dosa-recipe-280x280.jpg" },
            { "RecipeTitle": "Rava Kesari ", "Desc": "Basically, its fine semolina which is cooked with ghee, sugar and flavorings till a halwa like consistency is achieved. This Rava Kesari With Milk.", "Category":"Veg", "By":"Dassana Amit", "Img":"https://www.vegrecipesofindia.com/wp-content/uploads/2015/04/milk-kesari-recipe-280x280.jpg"},
            { "RecipeTitle": "Crispy Spring Rolls", "Desc": "A Popular Chinese snack of crispy rolls filled with a savory mixed vegetables stuffing.", "Category": "Veg", "By": "Dassana Amit", "Img": "https://www.vegrecipesofindia.com/wp-content/uploads/2015/10/spring-rolls-recipe-280x280.jpg" },
            { "RecipeTitle": "Paneer Tikka ", "Desc": "Paneer are marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven.", "Category": "Veg", "By": "Dassana Amit", "Img": "https://www.vegrecipesofindia.com/wp-content/uploads/2011/10/grilled-paneer-tikka-280x280.jpg" },
            { "RecipeTitle": "Classic Punjabi Samosa ", "Desc": "One of the most popular street food snack filled with savory and spiced potato and green peas.", "Category": "Veg", "By": "Dassana Amit", "Img": "https://www.vegrecipesofindia.com/wp-content/uploads/2013/11/samosa-0-280x280.jpg" },
            { "RecipeTitle": "Cheesy Pizza ", "Desc": "One of the most fun and easy dinners to make at home with just a few key tips.", "Category": "Non-Veg", "By": "Dassana Amit", "Img": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe-280x280.jpg" },
            { "RecipeTitle": "Mysore Masala Dosa ", "Desc": "It is a crispy, thin savory pancake with or without the humble potato filling or masala. Mysore Masala Dosa is one of the most popular ones.", "Category": "Veg", "By": "Dassana Amit", "Img": "https://www.vegrecipesofindia.com/wp-content/uploads/2013/05/mysore-masala-dosa-recipe-280x280.jpg" },
            { "RecipeTitle": "Rava Kesari ", "Desc": "Basically, its fine semolina which is cooked with ghee, sugar and flavorings till a halwa like consistency is achieved. This Rava Kesari With Milk.", "Category":"Veg", "By":"Dassana Amit", "Img":"https://www.vegrecipesofindia.com/wp-content/uploads/2015/04/milk-kesari-recipe-280x280.jpg"},
            { "RecipeTitle": "Crispy Spring Rolls", "Desc": "A Popular Chinese snack of crispy rolls filled with a savory mixed vegetables stuffing.", "Category": "Veg", "By": "Dassana Amit", "Img": "https://www.vegrecipesofindia.com/wp-content/uploads/2015/10/spring-rolls-recipe-280x280.jpg" },
            { "RecipeTitle": "Paneer Tikka ", "Desc": "Paneer are marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven.", "Category": "Veg", "By": "Dassana Amit", "Img": "https://www.vegrecipesofindia.com/wp-content/uploads/2011/10/grilled-paneer-tikka-280x280.jpg" },
            { "RecipeTitle": "Classic Punjabi Samosa ", "Desc": "One of the most popular street food snack filled with savory and spiced potato and green peas.", "Category": "Veg", "By": "Dassana Amit", "Img": "https://www.vegrecipesofindia.com/wp-content/uploads/2013/11/samosa-0-280x280.jpg" }
        ]
    )
    
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.Img} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.RecipeTitle}</h5>
                                                <p class="card-text">{value.Desc}</p>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">{value.Category}</li>
                                                <li class="list-group-item">{value.By}</li>
                                            </ul>
                                            <div class="card-body">
                                                <a href="#" class="card-link">Ingredients</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}



                        </div>
                        <br />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item disabled">
                                            <a class="page-link">Previous</a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="/">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewRecipies