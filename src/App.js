import React, { useState, Component } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload. { item }
      </p>
      <button onClick={incrementItem}>incrementItem</button>
      <button onClick={decrementItem}>decrementItem</button>
    </div>
  );
}

// class AppUgly extends React.Component {
//   state = {
//     item: 1
//   };
//   render() {
//     const { item } = this.state;
//     return (
//       <div className="App">
//           <p>
//             Edit <code>src/App.js</code> and save to reload. { item }
//         </p>
//         <button onClick={this.incrementItem}>incrementItem</button>
//         <button onClick={this.decrementItem}>decrementItem</button>
//       </div>
//     );
//   };
//   incrementItem = () => {
//     this.setState(state => {
//       return {
//         item: state.item + 1
//       };
//     })
//   };
//   decrementItem = () => {
//     this.setState(state => {
//       return {
//         item: state.item - 1
//       };
//     })
//   };
// }

export default App;
