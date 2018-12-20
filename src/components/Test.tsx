import * as React from "react";
import axios from "axios";

// Request API.
axios
  .get('http://localhost:1337/products', {
    params: {
      _sort: 'created_at:desc'
    }
  })
  .then(response => {
    // Handle success.
    console.log('Well done, here is the list of products: ', response.data);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });

class Test extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      products: []
    };
    this.getData = this.getData.bind(this);
  }

  getData = () => {
    axios
      .get("http://localhost:1337/products", {
        params: {
          _sort: "created_at:desc"
        }
      })
      .then(response => {
        // Handle success.
        console.log("Well done, here is the list of products: ", response.data);
        this.setState({
          products: response.data
        });
      })
      .catch(error => {
        // Handle error.
        console.log("An error occurred:", error);
      });
  };

  public render() {
    return (
      <div>
        <h2>Accessing the strapi API</h2>
        <p>Check the console for the list of uploaded "products"</p>
        <p>{this.getData}</p>
      </div>
    );
  }
}

export default Test;
