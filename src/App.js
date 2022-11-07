// CSS
import './App.css';

// Components
import { StylingGlobal } from 'components/StylingGlobal';
import { StylingInline } from 'components/StylingInline';
import { StylingCSSModules } from 'components/StylingCSSModules';


const App = () => {
  return (
    <div className="App">

      <StylingGlobal />
      
      <StylingInline />

      <StylingCSSModules />
      
    </div>
  );
}

export default App;
