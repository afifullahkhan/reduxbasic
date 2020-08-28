import React, { useState } from "react";
import { connect } from "react-redux";
import {Changename, changeapi} from './action'

function App(props) {
  const [name, setName] = useState("");
  const Changenamefun = (e) => {
    setName(e.target.value);
  };
  const get=()=>{
    props.changname(name);
    props.Fetchapi()
  }
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter Your Name for change"
        onChange={Changenamefun}
      />

      <button onClick={get}>OK</button>

      <h1>My Name is {props.changename}</h1>
      <h1>My Age is {props.myage}</h1>
      <h1>fetch from json holdeer api {props.fetchapi}</h1>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    changename: state.name,
    myage: state.age,
    fetchapi: state.api,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    changname: (name) => {
      dispatch(Changename(name));
    },
    Fetchapi:()=>{
      dispatch(changeapi());
    }
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
