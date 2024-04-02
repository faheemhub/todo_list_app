import './App.css';
import AppHeader from './components/AppHeader/index';
import AppFooter from './components/AppFooter/index';
import AppContent from './components/AppContent/index'

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <AppContent/>
      <AppFooter/>
    </div>
  );
}

export default App;
