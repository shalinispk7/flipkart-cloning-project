import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Body from './Components/Body/Body'
import { HashRouter } from 'react-router-dom'
import ProductContextProvider from './Store/ProductContext'

function App() {
  return (
    <>
      <HashRouter>
        <ProductContextProvider>
          <Header />

          <Body />
          <Footer />
        </ProductContextProvider>
      </HashRouter>
    </>
  )
}

export default App
