import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/NotesPage/Main/Main';
import FolderMain from './components/FoldersPage/FolderMain';

function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <FolderMain/>
    </div>
  );
}

export default App;
