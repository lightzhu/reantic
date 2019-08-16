import React from 'react'
// import axios from 'axios'
import './App.css'
import { Router, Route, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Register from './pages/login/register'
import Weather from './pages/weather/weather'
import News from './pages/news/news'
const history = createBrowserHistory()
// const location = history.location
// const unlisten = history.listen((location, action) => {
//   console.log(action, location.pathname, location.state)
// })

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      pwd: '',
      loggedIn: false,
      apiHost: 'https://imov.herokuapp.com'
    }
  }

  // getData() {
  //   axios
  //     .get('/get_movies')
  //     .then(function(response) {
  //       // handle success
  //       console.log(response)
  //     })
  //     .catch(function(error) {
  //       // handle error
  //       console.log(error)
  //     })
  //     .finally(function() {
  //       // always executed
  //     })
  // }
  handleClick() {
    history.push('/home', { some: 'state' })
  }
  render() {
    const { loggedIn, apiHost } = this.state
    return (
      <div className="App">
        <Router history={history}>
          {/* <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>
          </ul> */}
          <Route
            exact
            path="/"
            render={() =>
              loggedIn ? (
                <Redirect to="/dashboard" />
              ) : (
                <Home router={history} host={apiHost} />
              )
            }
          />
          <Route
            path="/login"
            exact
            render={() => <Login router={history} host={apiHost} />}
          />
          <Route
            path="/home"
            exact
            render={() => <Home router={history} host={apiHost} />}
          />
          <Route
            path="/register"
            exact
            render={() => <Register router={history} host={apiHost} />}
          />
          <Route
            path="/Weather"
            exact
            render={() => <Weather router={history} host={apiHost} />}
          />
          <Route
            path="/News"
            exact
            render={() => <News router={history} host={apiHost} />}
          />
        </Router>
      </div>
    )
  }
}

export default App
