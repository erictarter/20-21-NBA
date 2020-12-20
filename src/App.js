import './index.scss';
import { ContextProvider } from './components/context/Context';
import Header from './components/Header';
import PickWC from './components/PickWC';
import PickEC from './components/PickEC';
import Review from './components/Review';

function App() {
  return (
    <ContextProvider>
      <div className='App'>
        <Header></Header>
        <PickWC></PickWC>
        <PickEC></PickEC>
        <Review></Review>
      </div>
    </ContextProvider>
  );
}

export default App;
