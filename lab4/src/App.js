/* 

Create a new React app in a folder named "lab4". -
Create a new function component called MarketItem. 
Create a new class component called Market

*/

/*

Market (a class component) should:
Keep an internal state (object)
Use an internal property of its state (object) called items (array)
Import MarketItem
Allow a user to click a button (using the onClick event). It should:
Add a new MarketItem component to the state.items.
When adding a new MarketItem component, pass it the current number of entries in state.items as attributes named count and key
Show a listing of all current entries in state.items using the map() (Links to an external site.) method of Array (Links to an external site.), returning the current element in the Array.
MarketItem (a function component) should:
Accept props
Render a <div> containing a single <p> with the word "Item" followed by the props.count value such that each item will render "Item X" where X is its current number.
Not contain or use state of any kind
App (either a function or class component) should:
Not contain its default content
Import the Market component
Return or render() only the Market component

*/








import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
