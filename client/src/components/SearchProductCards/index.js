import React from "react";
import DataAreaContext from "../../utils/DataAreaContext";

class SearchProductCards extends React.Component {
  static contextType = DataAreaContext;
  createCards = () => {
    let cols = []

    // Outer loop to create parent
    for (let i = 0; i < this.context.products.length; i++) {
      let card = (
        <div className="card" key={i}>
          <div className="card-header">
            <div className="row">
              <div className="col s6">
                <h4 className="card-title">{this.context.products[i].name}</h4>
              </div>
              <div className="col s6">
                <a href={this.context.products[i].url} target="_blank"
                className="btn m-1"><i>View</i></a>
                <a href="#"
                className="btn m-1" onClick={() => this.context.handleSaveBook(this.context.products[i])}><i>Save</i></a>
              </div>
            </div>
          </div>
          <div className="card-body">
            
            <div className="row">
              <div className="col 6">
                <p className="category">Title: {this.context.products[i].title}</p>
                <p className="category">Description: {this.context.products[i].description}</p>
              </div>
              <div className="col s6">
                <p className="category">{this.context.products[i].price} {this.context.products[i].currency}</p>
              </div>
            </div>
          </div>
        </div>
      )
      //Create the parent and add the children
      cols.push(card)
    }
    return cols
  }
  
  render() {
    return (
      <div>
        <div className="row">
          <div className="input-field col s12">
            <label className="m-2" htmlFor="search">Product Search</label>
            <input
              onChange={this.context.handleSearchInputChange}
              name="search"
              placeholder="book"
              value={this.context.formObject.search}
            />
            <a href="#"
              className="btn m-2" onClick={this.context.handleSearchSubmit}><i>Search</i>
            </a>
          </div>
        </div>
        <div className="row">
          {this.createCards()}
        </div>
      </div>
    );
  }
}

export default SearchProductCards;
