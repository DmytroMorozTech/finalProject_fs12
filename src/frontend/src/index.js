import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './Theme/Theme'
import {Provider} from 'react-redux'
import store from './redux/configureStore'
import {CssBaseline} from '@material-ui/core'
import { CloudinaryContext } from 'cloudinary-react'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <CloudinaryContext cloudName="dan-insta-step">
            <App/>
          </CloudinaryContext>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your com.linkedin.app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
