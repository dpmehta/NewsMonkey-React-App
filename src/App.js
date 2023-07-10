import './App.css';
import React,{useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API;
  const pageSize = 4;

  const[progress,setProgress] = useState(0)

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />

        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} apiKey={apiKey} country="us" category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} apiKey={apiKey} country="us" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} apiKey={apiKey} country="us" category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} apiKey={apiKey} country="us" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} apiKey={apiKey} country="us" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} apiKey={apiKey} country="us" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} apiKey={apiKey} country="us" category="technology" />} />
        </Routes>

      </Router>
    </div>
  )

}

export default App;