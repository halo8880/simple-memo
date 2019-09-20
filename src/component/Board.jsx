import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { debounce, deleteById, findAllAsArray, saveMemo } from '../util/fakedb';
import NoteItem from './NoteItem';
import { AddCircleOutline } from '@material-ui/icons';

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	componentWillMount() {
		this.fetchData();
	}

	fetchData = () => {
		this.setState({
			data: findAllAsArray()
		});
	}


	render() {
		const { classes } = this.props;
		const { data } = this.state;
		return (
		  <>
			  {data.length === 0 ?
				<div
				  className={classes.noDataMessage}
				  onClick={() => {
					  saveMemo(undefined, '', '');
					  this.fetchData();
				  }}
				>
					<div>There is no memo, create a new one now</div>
					<AddCircleOutline className={classes.addIcon}/>
				</div>
				:
				<></>
			  }
			  <div className={classes.boardContainer}>

				  {data.map((item) =>
					<NoteItem
					  key={`noteItem#${item.id}`}
					  id={item.id}
					  title={item.title}
					  text={item.text}
					  onTitleChange={
						  debounce((id, title) => {
							  saveMemo(id, title, undefined);
							  this.fetchData();
						  }, 500)
					  }
					  onTextChange={
						  debounce((id, text) => {
							  saveMemo(id, undefined, text);
							  this.fetchData();
						  }, 500)
					  }
					  onDelete={id => {
						  deleteById(id);
						  this.fetchData();
					  }}
					/>
				  )}
			  </div>
		  </>
		)
	}
}

const styles = {
	boardContainer: {
		padding: '5em 3em 5em 3em',
		minWidth: '400px',
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
		gridGap: '3em',
		backgroundColor: '#f5f5f5',
		flexGrow: 1
	},
	boardItem: {
		border: '1px solid black',
		minHeight: '10em',
	},
	noDataMessage: {
		backgroundColor: '#f5f5f5',
		display: 'flex',
		paddingTop: '10%',
		flexDirection: 'column',
		alignItems: 'center',
		height: '100%',
		fontWeight: '600',
		color: '#c6ccc7',
		fontSize: '2em'
	},
	addIcon: {
		marginTop: '1em',
		width: '5em',
		height: '5em'
	}
};
export default withStyles(styles)(Board);