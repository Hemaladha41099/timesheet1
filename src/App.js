import Header from "./Component/Header.js"
import './App.css';
import Sidenav from './Component/Sidenav.js';
import Profile from "./Component/Profile.js";
// import Content from "./Component/Content.js";


function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <Sidenav className="Sidebar" />
        <Header className="Header" />
        <Profile className="profile"/>
        {/* <Content className="content"  /> */}
      </div>
    </div>
  );
}

export default App;
