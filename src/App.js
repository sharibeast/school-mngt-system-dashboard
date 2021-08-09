import Aside from './components/aside/Aside';
import Main from './components/main/Main';
import Nav from './components/navigation/Nav';
function App() {
  return (
    <div className="h-screen p-4 bg-coolgray md:grid md:grid-cols-2">
      <Nav />
      <Main />
      <Aside />
    </div>
  );
}

export default App;
