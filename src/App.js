import Card from './components/Card'
import './App.css';

function App() {
const fetchPost = async()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  console.log(response)
}
fetchPost()

  return (
    <div className="App">
       <h1>Side Hustle3</h1>
       <Card />
    </div>
  );
}

export default App;
