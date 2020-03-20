import React from 'react';




class App extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        value: []
      }
    }

  componentDidMount(){
    fetch("https://raw.githubusercontent.com/prayagd/unicorn-startups-list/master/src/unicorndata.json")
    .then(res => res.json())
    .then(val => {
      this.setState({
        value: [val[0], val[1], val[2], val[3]]
      })
    })
  }

  render(){
    return(
        <table>
          <tr>
            <th>Startup</th>
            <th>Valuation</th>
            <th>Valuation date</th>
            <th>Country</th>
          </tr>

          {this.state.value.map((val, i) =>
            <tr>
              
            </tr>
          )}
        </table>
    )
  }
}

export default App;
