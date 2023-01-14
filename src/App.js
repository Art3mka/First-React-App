import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Options from './components/Options/Options';
import Profile from './components/Profile/Profile';
import SideBar from './components/SideBar/SideBar';
import Music from './components/Music/Music';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <div className="page__wrapper">
          <SideBar />
          <div className="page__content">
            <Routes>
              <Route path="/profile/*" element={<Profile state={props.state.profilePage}/>}/>
              <Route path="/messages/*" element={<Messages state={props.state.messagesPage}/>}/>
              <Route path="/options/*" element={<Options/>}/>
              <Route path="/news/*" element={<News/>}/>
              <Route path="/music/*" element={<Music/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
