import React from "react";
import { withStyles } from '@material-ui/core/styles';

class NoteItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			title: '',
			text: ''
		}
	}

	handleDeleteClicked = () => {
		if (this.props.onDelete) {
			this.props.onDelete(this.state.id);
		}
	}

	handleTitleChange = event => {
		const value = event.target.value;
		this.setState(
		  { title: value },
		  () => {
			  if (this.props.onTitleChange) {
				  this.props.onTitleChange(this.state.id, value);
			  }
		  });
	}

	handleTextChange = event => {
		const value = event.target.value;
		this.setState(
		  { text: value },
		  () => {
			  if (this.props.onTextChange) {
				  this.props.onTextChange(this.state.id, value);
			  }
		  });
	}

	componentWillMount() {
		this.setState({
			id: this.props.id,
			text: this.props.text,
			title: this.props.title,
		})
	}

	render() {
		const { classes } = this.props;
		return (
		  <div className={classes.noteItem} style={{
			  backgroundColor: this.props.color || '#fff9c7',
			  transform: this.props.rotateDirection === 'right' ? 'rotate(3deg)' : 'rotate(-3deg)'
		  }}>
			  <div className={classes.noteHeader}>
				  <input
					className={classes.noteTitleInput}
					value={this.state.title}
					onChange={this.handleTitleChange}
				  />
				  <button
					className={classes.btnDelete}
					onClick={this.handleDeleteClicked}
				  >
					  X
				  </button>
			  </div>
			  <textarea
				className={classes.noteBodyInput}
				value={this.state.text}
				onChange={this.handleTextChange}
			  />
		  </div>
		)
	}
}

const styles = {
	  btnDelete: {
		  display: 'inline-block',
		  minWidth: '2.7em',
		  maxWidth: '2.7em',
		  minHeight: '2.7em',
		  maxHeight: '2.7em',
		  backgroundColor: 'rgba(255, 255, 255, 0.0)',
		  border: '0',
		  fontWeight: '700',
		  color: 'red',
		  '&:hover': {
			  backgroundColor: 'rgba(255, 255, 255, 0)'
		  },
		  '&:focus': {
			  outline: 'none'
		  }
	  },
	  noteHeader: {
		  display: 'flex',
		  justifyContent: 'space-between',
		  backgroundColor: 'rgba(255, 255, 255, 0.5)',

	  },
	  noteItem: {
		  height: '15em',
		  boxShadow: '5px 10px 18px #888888',
		  display: 'flex',
		  flexDirection: 'column',
		  justifyContent: 'flex-start',
	  },
	  noteTitleInput: {
		  background: 'rgba(0, 0, 0, 0)',
		  border: 'none',
		  padding: '0.2em 0.5em',
		  height: '2.7em',
		  fontWeight: '600',
		  flexGrow: '1',
		  // flexBasis: '70%',
		  display: 'inline-block',
		  minWidth: 0,
		  '&:focus': {
			  outline: 'none'
		  }
	  },
	  noteBodyInput: {
		  border: 'none',
		  background: 'rgba(0, 0, 0, 0)',
		  margin: '0.5em',
		  resize: 'none',
		  flexGrow: 1,
		  display: 'block',
		  '&:focus': {
			  outline: 'none'
		  }
	  }
  }
;
export default withStyles(styles)(NoteItem);