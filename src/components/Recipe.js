import React, { Component } from 'react';
import Title from './Title';
import Image from './Image';

export default class Recipe extends Component {
	render(){
		return(
          <div>
         	{this.props.meals.map((item, index) => {
         		return ( 
         			<div 
         				key={index} 
         				href={item.strSource}>
         				<Image source={item.strMealThumb} text={item.strMeal} />
         				<Title title={item.strMeal} />
         			</div> 
         		)
         	})}
          </div>
		)
	}
}