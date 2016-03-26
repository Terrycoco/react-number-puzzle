//example of container that needs to dispatch actions out
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { movetile } from 'actions.index';

class ExampleOut extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.exampleProp}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {exampleProp: stateKey}  //usually same name and can use es6 syntax also
    , dispatch);
}
//must be second arg
export default connect(null, {moveTile})(ExampleOut);
