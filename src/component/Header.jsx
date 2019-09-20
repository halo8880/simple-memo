import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';

class Header extends React.Component {

	handleAddBtnClick = () => {
		if (this.props.onAddBtnClick) {
			this.props.onAddBtnClick();
		}
	}

	render() {
		const { classes } = this.props;
		return (
		  <AppBar className={classes.header} position={"static"}>
			  <Toolbar>
				  <Typography variant="h6" className={classes.title}>
					  React Memo
				  </Typography>
				  <IconButton
					className={classes.addBtn}
					title={"Add new note"}
					edge="start"
					color="inherit"
					onClick={this.handleAddBtnClick}
				  >
					  <AddCircleOutline className={classes.addIcon}/>
				  </IconButton>

			  </Toolbar>
		  </AppBar>
		)
	}
}

const styles = {
	header: {
		minHeight: '5em',
		display: 'flex',
		justifyContent: 'center',
	},
	addBtn: {
		marginLeft: '1em',
		fontWeight: '2em'
	},
	addIcon: {
		width: '1.5em',
		height: '1.5em'
	}
};
export default withStyles(styles)(Header);