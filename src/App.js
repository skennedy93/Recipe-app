import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {}
    }
  }
  componentDidMount(){
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          recipe: result.recipe
        });
        console.log(result)
      },
    )
      
}
render() {

    return (
      <div className="App">
     
      </div>
    );
  }
}
export default App;
