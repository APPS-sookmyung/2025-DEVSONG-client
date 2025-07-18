import './App.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';

function App() {
  return (
    <div className='min-h-screen overflow-x-hidden flex flex-col justify-between'>
      <Header />
      <main className='grow'> Content goes here</main>
      <Footer />
    </div>
  );
}

export default App;
