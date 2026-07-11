import './App.css'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
  import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'


function App() {

  return (
    <>
    <div className='w-full overflow-hidden'>
      <ToastContainer></ToastContainer>
      <Header></Header>
<About></About>
<Projects></Projects>
<Testimonials/>
<Contact></Contact>
<Footer></Footer>
    </div>

    </>
  )
}

export default App
