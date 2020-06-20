import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addFeature, removeFeature} from './actions';
import { connect } from "react-redux";


const App = props => {

  const removeFeatures = item => {
    props.removeFeature(item)
  }

  const addFeatures = item => {
    props.addFeature(item)
  }

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeatures={removeFeatures}  />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeatures={addFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
};

const mapDispatchToProps = { addFeature, removeFeature };

export default connect(mapStateToProps, mapDispatchToProps)(App);
