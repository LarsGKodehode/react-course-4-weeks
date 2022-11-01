import { CardUsingProps } from 'components/CardUsingProps';
import './App.css';

const App = () => {
  return (
    <div className="App">
      
      {/* React ignores linebreaks inside component definition,
      so if you have more than one property you want to configure write them like this */}
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
