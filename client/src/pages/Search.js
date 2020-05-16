import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import SearchProductCards from "../components/SearchProductCards";
import API from "../utils/API";
import DataAreaContext from "../utils/DataAreaContext";

function Search() {
  const [products, setProducts] = useState([])
  const [formObject, setFormObject] = useState({
    search: "",
  })

  // save book to DB
  function handleSaveProduct(product) {
    console.log(product);
    // API.saveProduct({
    //   title: book.title,
    //   authors: book.authors,
    //   description: book.description,
    //   image: book.image,
    //   link: book.link
    // })
    // .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleSearchInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // search for the query in Google books
  function handleSearchSubmit(event) {
    event.preventDefault();
    console.log(formObject.search);
    API.productSearchKeyword(formObject.search)
      .then(res => {
        console.log(res);
        const products = res.data.Data;
        setProducts(products);
      }
    )
    .catch(err => console.log(err));
  };

  return (
    <div>
      <Header page="search" custom="navbar-expand-lg bg-dark" />
      <Main name='Search'>
        <DataAreaContext.Provider
            value={{ handleSaveProduct, handleSearchSubmit, handleSearchInputChange, formObject, products }}
            >
            <SearchProductCards />
        </DataAreaContext.Provider>
      </Main>
      <Footer />
    </div>
  );
};

export default Search;
