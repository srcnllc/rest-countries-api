import './App.css'
import Card from './components/CardComponent/Card';
import Header from './components/HeaderComponent/Header';
import Search from './components/searchComponent/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Search />
        <Card />
      </div>

    </div>
  );
}

export default App;
