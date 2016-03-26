import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BindActionCreators } from 'redux';
import { startGame } from 'actions/index';

const styles = {
  panel: {
    minHeight: '50px',
    flexBasis: '30%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    height: '48px',
    marginBottom: '10px',

  }
};

class GameControls extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.startGame(this.props.rows);
  }
  render() {
    return (
      <div style={styles.panel}>
        <button style={styles.button} onClick={this.onClick}>Reset</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rows: state.tiles.rows
  };
}

export default connect(mapStateToProps, {startGame})(GameControls);
