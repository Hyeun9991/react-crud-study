import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";

function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is...' },
    { id: 2, title: 'css', body: 'css is...' },
    { id: 3, title: 'javascript', body: 'javascript is...' },
  ]
  return (
    <div>
      <Header title='WEB'/>
      <Nav topics={topics}/>
      <Article title='Welcome' body='Hello, WEB'/>
    </div>
  );
}

export default App;
