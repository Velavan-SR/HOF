import React from "react";
import { Component } from "react";
import "../App.css";

class HigherOrderFunctions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  renderItems = () => {
    const data = this.state.userData;
    const map2 = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>ID: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return map2;
  };

  typeFilter = () =>{
    const typeFilter = this.state.userData.filter((item)=>item.user_type === 'Designer')
    return typeFilter.map(item => (
        <React.Fragment key={item.id}>
          <li className="list-elements">
            <span>ID: {item.id}</span>
            <span>Name: {item.name}</span>
            <span>User Type: {item.user_type}</span>
          </li>
        </React.Fragment>
      ));
  }

  letterFilter = () =>{
    const nameFilter = this.state.userData.filter((item)=>item.name.startsWith('J'))
    return nameFilter.map(item =>(
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>ID: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        </React.Fragment>
    ))
  };

  ageFilter = ()=>{
    const ageFilter = this.state.userData.filter((item)=> item.age >=28  && item.age<=50)
    return ageFilter.map(item =>(
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>ID: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        </React.Fragment>
    ))
  };

  designersExperience = ()=>{
    const lastFilter = this.state.userData.filter((item)=> item.user_type === 'Designer')
    return lastFilter.reduce((item, exp)=> item + exp.years,0)
  }



  render() {
    return (
      <React.Fragment>
        <h3>Display all items</h3>
        <div className="display-box">
          <ul>{this.renderItems()}</ul>
        </div>
        <h3>Display based on user type</h3>
        <div className="display-box">
        <ul>{this.typeFilter()}</ul>
        </div>
        <h3>Filter all data starting with j </h3>
        <div className="display-box">
        <ul>{this.letterFilter()}</ul>
        </div>
        <h3>Filter all data based on age greater than 28 and less than or equal to 50 </h3>
        <div className="display-box">
        <ul>{this.ageFilter()}</ul>
        </div>
        <h3> FIND THE TOTAL EXPERIENCE OF THE DESIGNERS</h3>
        <div className="display-box">
        <ul>{this.designersExperience()}</ul>
        </div>
      </React.Fragment>
    );
  }

}

export default HigherOrderFunctions;