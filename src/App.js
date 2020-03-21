import React from 'react';

class App extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        value: []
      }
      this.handleName = this.handleName.bind(this)
      this.handleCountry = this.handleCountry.bind(this)
    }

  handleName(e){
    let table = document.getElementById("myTable")
    let tr = table.getElementsByTagName("tr")
    for(let i = 0; i < tr.length; i++){
      let td = tr[i].getElementsByTagName("td")[0];
      if(td){
      let txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
      }
    }    
  }


  handleCountry(e){
    let table = document.getElementById("myTable")
    let tr = table.getElementsByTagName("tr")
    for(let i = 0; i < tr.length; i++){
      let td = tr[i].getElementsByTagName("td")[3];
      if(td){
      let txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
      }
    } 
  }

  componentDidMount(){
    fetch("https://raw.githubusercontent.com/prayagd/unicorn-startups-list/master/src/unicorndata.json")
    .then(res => res.json())
    .then(val => {
      this.setState({
        value: val
      })
    })
  }

  render(){

    return(
      <div>
        <h1>List of Unicorn Startups</h1>
        <div id = "cover">
        <div id = "inp">
          <input type = "text" id = "myInput" placeholder = "Search by name" onChange = {this.handleName}></input>
          <input type = "text" id = "myInput" placeholder = "Search by country" onChange = {this.handleCountry}></input>
        </div>
        <table id = "myTable">
          <tr>
            <th>Startup</th>
            <th>Valuation(US$ billion)</th>
            <th>Valuation date</th>
            <th>Country</th>
          </tr>
          {this.state.value.map((val) => 
            <tr>
              <td>{val[0]}</td>
              <td>{val[1]}</td>
              <td>{val[2].slice(0, val[2].indexOf("["))}</td>
              <td>{val[3]}</td>
            </tr>
          )}
        </table>
      </div>
      <footer>
        <p>Prayag @ 2020</p>
        <p>Made with React</p>
      </footer>
      </div>
      
    )
  }
}

export default App;
