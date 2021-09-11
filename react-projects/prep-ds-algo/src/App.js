import './App.css';
import Footer from './components/Footer/Footer';
import MainContainer from './components/MainContainer/MainContainer';
import PageHeader from './components/PageHeader/PageHeader';
import TopHeaderContainer from './components/TopHeader/TopHeaderContainer';

function App() {
  return (
    <div className="App">
        <TopHeaderContainer/>
        <PageHeader/>
        <MainContainer/>
        <Footer/>
    </div>
  );
}

export default App;
