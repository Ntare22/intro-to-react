import React from 'react'
// import Joke from './components/Joke';
// import jokesData from './jokesData';
import NavBar from './components/NavBar'
import MainContent from './components/MainContent'
// import Footer from './components/Footer'

// const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question = {joke.question} punchline = {joke.punchline}/>)
const App = () => {
  return ( 
    <div>
      <NavBar />
      <MainContent />
      {/* <Footer /> */}
    </div>
  )
}

export default App;
