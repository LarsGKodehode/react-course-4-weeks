// CSS
import './App.css';

// Components
import { StylingGlobal } from 'components/StylingGlobal';
import { StylingInline } from 'components/StylingInline';


const App = () => {
  return (
    <div className="App">

      <StylingGlobal />
      
      <StylingInline />
      
    </div>
  );
}

export default App;
