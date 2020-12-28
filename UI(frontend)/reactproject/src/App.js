import React from 'react';
import './App.css';
import Header from './components/Header-page/Header';
import UserTable from './components/User-Table/UserTable';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <UserTable/>
      </>

    );
  }
}
export default App;
