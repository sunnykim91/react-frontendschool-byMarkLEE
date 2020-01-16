import React, { Component } from 'react';
import './App.css';
// import Game from './component/Game';

// function App() {
//   return (
//     <div className='App'>
//       <Game />
//     </div>
//   );
// }

class App extends Component {
  listRef = React.createRef();

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    console.log('App render');
    return (
      <ul ref={this.listRef} style={{ height: 200, overflow: 'scroll' }}>
        {this.props.list.map(text => (
          <div key={text}>{text}</div>
        ))}
      </ul>
    );
  }
}

export default App;
