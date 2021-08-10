import Aside from './components/aside/Aside';
import Main from './components/main/Main';
import Nav from './components/navigation/Nav';
function App() {
  return (
    <div className="grid grid-cols-1 bg-coolgray md:grid-cols-8">
      {/* <div className="hidden h-screen bg-purple-600 md:col-span-2 md:block">
        Navigation
      </div> */}
      <Nav />
      <Main />
      <Aside />
      {/* <div className="h-screen bg-red-400 md:col-span-4">Main</div>
      <div className="h-screen bg-gray-700 md:col-span-2">Aside</div> */}
    </div>
  );
}

export default App;
