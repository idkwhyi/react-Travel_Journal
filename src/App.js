import './App.css';
import Navbar from './components/Navbar.js'
import Card from './components/Card.js'
import data from './components/data.js'

const cards = data.map(item => {return <Card {...item}/>})

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='w-auto flex flex-col items-center justify-center gap-7 mt-10'>
        {cards}
      </div>
    </div>
  );
}

export default App;
