// import {useState , useEffect} from 'react';
import './App.css';
import Navbar from './Navbar';
import Maincontainer from './Maincontainer';
// import {Switch , Route} from "react-router-dom";


function App() {

  // const [searchResults , setSearchResults] = useState([]);
  // const [searchText , setSearchText] = useState('');

  // useEffect ( () => {
  //   fetch(`https://github.com/${searchText}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     setSearchResults(data.results)
  //   })
  // }, [searchText])
  return (
    <div className="App">
        <Navbar className="Navbar"/>
        <Maincontainer/>
    </div>
  );
}

export default App;
