import React, { Component } from 'react';
import Title from './Title';
import Image from './Image'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
	root: {
		flexGrow: 1,
	  },
	  paper: {
		width: 370,
	  },
  });

 class Recipe extends Component {
	render(){
		const { classes } = this.props;
		return(
          <div>
		      <Grid container className={classes.root} spacing={2}>
				<Grid container justify="center" >
				{this.props.meals.map((item, index) => {
         		return ( 
					 <Paper className={classes.paper}>
						<Image source={item.strMealThumb} text={item.strMeal} />
						<Title title={item.strMeal} />
				   </Paper>
         		)
         	})}
				</Grid>
			</Grid>
          </div>

		)
	}
}
Recipe.propTypes = {
	classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Recipe);