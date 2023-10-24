import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Body from './Components/Body/Body'
import ProductContextProvider from './Store/ProductContext'

function App() {
  return (
    <div>
      <ProductContextProvider>
        <Header />
        <Body />
        <Footer />
      </ProductContextProvider>
    </div>
  )
}

export default App
