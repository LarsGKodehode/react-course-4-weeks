// CSS
import './App.css';

// Components
import { StylingGlobal } from 'components/StylingGlobal';
import { StylingInline } from 'components/StylingInline';
import { StylingCSSModules } from 'components/StylingCSSModules';
import { StylingStyledComponents } from 'components/StylingStyledComponents';


const App = () => {
  return (
    <div className="App">

      <StylingGlobal />
      
      <StylingInline />

      <StylingCSSModules />

      <StylingStyledComponents />
      
    </div>
  );
}

export default App;
