import React, { Component } from 'react';
import Title from './Title';
import Image from './Image';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
	container: {
	  padding: 20,
	  marginTop: 70,
	},
	card: {
	  marginTop: 25,
	  position: 'relative',
	  overflow: 'visible',
	  minWidth: '40%',
	  minHeight: 350,
	  zIndex: 0,
	},
	paper: {
	  margin: 'auto',
	  marginTop: 50,
	},

  });

export default class Recipe extends Component {
	render(){
		const { classes } = this.props;
		return(
          <div>
		      <Grid container spacing={2}>
			  <Grid item xs={12}>
				<Grid container justify="center" >
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

				</Grid>
			  </Grid>
			</Grid>
          </div>

		)
	}
}