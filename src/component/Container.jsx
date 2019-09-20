import React from "react";
import Header from './Header';
import Board from './Board';
import { saveMemo } from '../util/fakedb';

class Container extends React.Component {
	render() {
		return (
		  <>
			  <Header
				onAddBtnClick={() => {
					saveMemo(undefined, '', '');
					this.boardRef.fetchData();
				}}/>
			  <Board ref={ref => {
				  this.boardRef = ref;
			  }}/>
		  </>
		)
	}
}

export default Container;