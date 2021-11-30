import './App.css';
import React from 'react';
import Home from "./pages/Home";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';



function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>श्री कृष्णा गोविन्द हरे मुरारी
हे नाथ नारायण वासुदेवा
एक मात स्वामी सखा हमारे
हे नाथ नारायण वासुदेवा
बंदी गृह के तुम अवतारी
कही जन्मे कही पीला मुरारी
किसी के जाए किसी के कहे
है अद्भुत हर बात टिहरी
गोकुल में चमके मथुरा के तारे
हे नाथ नारायण वासुदेवा
श्री कृष्णा गोविन्द हरे मुरारी
हे नाथ नारायण वासुदेवा
आधार में बंशी ह्रदय में राधे
बात गए दोनों में आधे आधे
हे राधा नगर हे भक्त वत्सल
सदैव भक्तो के काम साढ़े
वहीँ गए वहीँ गए जहा गए पुकारे
हे नाथ नारायण वासुदेवा
राधे कृष्णा राधे कृष्णा
राधे राधे कृष्णा कृष्णा</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
