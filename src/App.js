import { CardUsingProps } from 'components/CardUsingProps';
import './App.css';

const App = () => {
  return (
    <div className="App">
      
      <CardUsingProps
        title="Look"
        paragraph="There is two of us"
      />

      <CardUsingProps
        title="And"
        paragraph="We are different"
      />

    </div>
  );
}

export default App;
