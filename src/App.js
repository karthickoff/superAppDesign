import './App.css';
import ActivityScreen from './screens/activityScreen';
import { HandleTheme, HandleUserCredentials } from './utils/device-interface';

function App() {
  HandleTheme();
  HandleUserCredentials();
  return (
    <div className="App">
      <ActivityScreen />
    </div>
  );
}

export default App;
