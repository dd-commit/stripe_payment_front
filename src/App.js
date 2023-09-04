import logo from './logo.svg';
import './App.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './stripe_checkout';
let stripe_test_Promise = loadStripe('public key')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <a className="App-link"href="https://reactjs.org"target="_blank"rel="noopener noreferrer" style={{padding:'15px'}} >
           To Learn React please pay by below card 
        </a>
        <h4> ₹ 1000</h4>
        <Elements stripe={stripe_test_Promise}>
        <Checkout/>

      </Elements>
      
      </header>
      
    </div>
  );
}

export default App;
