import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ContactForm from './components/Form';
import Paragraph from './components/Paragraph';
import Apply from './components/Apply';
import TrendingServices from './components/TrendingServices';
import AllLoans from './components/AllLoans';
import HowToApply from './components/HowToApply';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Footer from './components/footer';
function App() {
  return (
    <>
    <div className="main-div-app">
    <Navbar/>
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-lg-4">
          <Paragraph />
          {/* <div className='img-app'></div> */}
        </div>
        <div className="col-lg-8 d-flex justify-content-end">
          <ContactForm />
        </div>
      </div>
    </div>
    <div className='container'>
    <Apply/>
    </div>
    <TrendingServices/>
    {/* <AllLoans/> */} <Features/>
    <HowToApply/>
    <div id="faq"><FAQ/></div>
    <Footer/>
    
    
    </div>
    </>
    
  );
}

export default App;
