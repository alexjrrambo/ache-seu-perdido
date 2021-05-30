import { Router } from 'react-router-dom'

import GlobalStyle from './styles/global'
import { PublicRoutes, history } from './routes'
import Header from './components/Header'

const App = () => {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Header />
      <PublicRoutes />
    </Router>
  )
}

export default App
