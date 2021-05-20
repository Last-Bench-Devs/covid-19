
import { Button } from '@material-ui/core';
import React,{useEffect, useState} from 'react'
import styled, { ThemeProvider } from 'styled-components';
import './App.css'
import { darkTheme, GlobalStyles, lightTheme } from './theme';

const StyledDiv = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


function App() {

  const [theme, SetTheme] = useState("light");


  const themeToggler = () => {
    theme === "light"? SetTheme("dark") : SetTheme("light");
  }

  const [data, setData] = useState([]);

  

  const getCovidData = async () => {
    try {
      const res = await fetch('https://api.covid19india.org/data.json');
      const dataJson = await res.json();
      console.log(dataJson.statewise)
      setData(dataJson.statewise[0])
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getCovidData()
  }, [])


  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledDiv className="row">
        <button onClick={() => themeToggler()} >Change Theme</button>
      <div className="column">
        <div className="card11">
          
          <h1 className="numbers">{data.active}</h1>
          <p className="cses_text">{data.state} Active</p>
        </div>
        <div className="card11">
        <h1 className="numbers">{data.confirmed}</h1>
          <p className="cses_text">{data.state} Confirmed</p>
        </div>
        <div className="card11">
        <h1 className="numbers">{data.recovered}</h1>
          <p className="cses_text">{data.state} Recovered</p>
        </div>
        <div className="card11">
        <h1 className="numbers">{data.deaths}</h1>
          <p className="cses_text">{data.state} Deaths</p>
        </div>
      </div>
      <div className="column1">
        <div className="card1">
        <h1 className="map">map here</h1>
        </div>
      </div>
    </StyledDiv>
    </ThemeProvider>

  )
}

export default App
