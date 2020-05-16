import axios from "axios";

const barcode_apikey = "0E15CAC54EBA008932E01DCBD1B848BA";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  productSearchBarcode: function(searchText) {
    var config = {
      headers: {'Access-Control-Allow-Origin': '*'}
    };
    return axios.get('https://cors-anywhere.herokuapp.com/https://api.upcdatabase.org/search/?query='+searchText+'&apikey=0E15CAC54EBA008932E01DCBD1B848BA', config)
  },
  productSearchKeyword: function(searchText) {
    return axios.get('https://api.barcodespider.com/v1/search?token=842b986ae65f025eead8&s=samsung%20galaxy'+encodeURIComponent(searchText))
  }
};
