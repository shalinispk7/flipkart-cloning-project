import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Body from './Components/Body/Body'
import { BrowserRouter } from 'react-router-dom'
import ProductContextProvider from './Store/ProductContext'

function App() {
  return (
    <div>
      <BrowserRouter>
        <ProductContextProvider>
          <Header />
          <Body />
          <Footer />
        </ProductContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
