import React from 'react';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import Characters from './components/Characters';
function App() {
  const state = useSelector(state => state)
  const characters = state.characters;
  const loading = state.loading
  return (
    <div className="">
      <div class="bg-light mb-3 border-bottom"><div class="container"><h4 class="m-0 pt-3 pb-3">Breaking Bad</h4></div></div>
      <div className="container">
        {loading ? <div className="loading"></div> : <Characters data={characters} />}
      </div>
    </div>
  );
}

export default App;
