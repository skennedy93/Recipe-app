import React, { Component } from 'react';
import Recipe from './components/Recipe';
import './App.css';
import axios from 'axios';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: {}
    }
  }

  componentDidMount(){
    const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';

    axios.get(URL)
      .then(res => {
        const meal = res.data.meals;
        if(typeof meal === 'object'){
          this.setState({ meal });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    var data = this.state.meal;
    return (
      <div className="App">
        {data.length > 0 && <Recipe meals={data} />}
      </div>
    );
  }
}

