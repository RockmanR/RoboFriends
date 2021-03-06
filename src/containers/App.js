import React from 'react';
import ArrayList from '../components/ArrayList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import  {robots}  from './robots';
import '../index.css';
import 'tachyons';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render(){
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if(this.state.robots.length === 0){
      return <h1>Loading</h1>
    } else {
      return(
        <div className='tc'>
              <h1>Robo Friends</h1>
              <SearchBox searchChage={this.onSearchChange}/>
              <Scroll>
                <ArrayList robots={filteredRobots}/>
              </Scroll>
        </div>
      )
    }
  }
}

export default App;
