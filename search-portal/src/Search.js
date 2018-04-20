import React, { Component } from "react";
import axios from "axios";

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'



const URL = "http://192.168.1.18:8983/solr/elgg-core/select?q=*:*";

export default class Search extends Component {
  


  constructor(props) {
    super(props);
    this.state = {value: '', results: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //this.state = this.state.bind(this);
  }


  displayResults() {
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();


    fetch(URL, {
      //mode: "no-cors",
      headers: {"Accept": "application/json"},
      method: "GET"
    })
    .then(response => {
      console.log(response);

      //if (response.type === "opaque" || response.ok) {
        return response.json()
      //}
     
    }).then((response) => {

      console.log(response);
      this.setState({results: JSON.stringify(response)});  
    
    });

  }

  render() {


    return (

      <div id="parent">

      <form onSubmit={this.handleSubmit}>
        
          <input class="searchInput" name="searchText" onChange={this.handleChange.bind(this)} type="text"/>
        <button class="searchButton" type="submit"><FontAwesomeIcon icon={faSearch} color="white" /></button>
      </form>
      
        <div id="child"> {this.state.results} </div>

      </div>


    );
  }


  
}

