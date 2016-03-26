import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BindActionCreators } from 'redux';
import { moveTile } from 'actions/index';

const styles = {
  tile: {
    textAlign: 'center',
    border: '1px solid black',
    background: 'white',
    color: 'red',
    flex: '1 0 33%',
    margin: '.15%',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: '36px',
    borderRadius: '10px'
  },
  hidden: {
    textAlign: 'center',
    flex: '1 0 33%',
    margin: '.15%',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: '36px',
    borderRadius: '10px',
    backgroundColor: '#777',
    color: '#777',
    border: 'none'
  }
};



class Tile extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    if (this.props.tile.movable) {
      this.props.moveTile(this.props.tile);
    }
  }
  render() {
    let tilestyle = {};
    if (this.props.tile.value == 'x') {
      tilestyle = Object.assign({}, styles.hidden, {order: this.props.tile.pos});
    } else {
      tilestyle = Object.assign({}, styles.tile, {order: this.props.tile.pos});
    }

    return(
      <span style={tilestyle} onClick={this.onClick}>{this.props.tile.value}</span>
    );
  }
}

function mapStateToProps(state) {
  return {
    xPos: state.tiles.xPos
  };
}

export default connect(mapStateToProps, { moveTile })(Tile);
