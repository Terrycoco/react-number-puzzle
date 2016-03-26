import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tile from 'components/Tile';
import GameControls from 'components/GameControls';

const styles = {
  page: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center'
  },
  mainSection: {
    alignSelf:'stretch',
    backgroundColor: '#eee',
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '15vh',
    paddingBottom:'15vh'
  },
  board: {
    flex: '1 1 auto',
    height: '50vh',
    width: '50vh',
    padding: '3px',
    border: '3px solid #888',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#777'
  }


};



function isEven(n) {
  return n % 2 == 0;
}

class Puzzle extends Component {
  constructor(props) {
    super(props);
    this.rows = props.rows;
  }
  isMovable(tilePos) {
    return (isEven(this.props.xPos) != isEven(tilePos) && (Math.abs(tilePos - this.props.xPos) <= this.rows));
  }
  render() {
    let tiles = this.props.tiles.map((item, idx) => {
      let movable = this.isMovable(idx);
      return  <Tile key={idx} isWin={this.props.isWin} tile={{pos:idx, value: item, movable: movable}} />
    });
    return (
     <div style={styles.page}>
        <h2>Number Puzzle</h2>
        <div style={styles.mainSection}>
            <div style={styles.board} handleClick={this.handleClick}>
               {tiles}
            </div>
        </div>

        <GameControls />
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tiles: state.tiles.tileArr,
    xPos: state.tiles.xPos,
    rows: state.tiles.rows,
    isWin: state.tiles.isWin
  };
}

export default connect(mapStateToProps)(Puzzle);
