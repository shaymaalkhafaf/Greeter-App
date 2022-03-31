import './App.css';
import Greeter from './components/Greeter';
import Text from './components/Text';
// import Logo from './components/Logo';
import nameArray from './data.js';



function App() {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      {/* <Greeter name="Yoda" /> */}  
      {
       nameArray.map(n => <Greeter name={n.name} age={n.age}/>)
      }
      
      <Text />
      {/* <Logo /> */}

    </div>
  );
}

export default App;
