import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Body from './Components/Body/Body'
import { HashRouter } from 'react-router-dom'
import ProductContextProvider from './Store/ProductContext'
import { Provider } from 'react-redux'
import appStore from './ReduxStore/appStore'

function App() {
  return (
    <>
      <HashRouter>
        <Provider store={appStore}>
          <ProductContextProvider>
            {/* <Header /> */}

            <Body />
            <Footer />
          </ProductContextProvider>
        </Provider>
      </HashRouter>
    </>
  )
}

export default App
