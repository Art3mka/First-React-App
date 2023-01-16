import { Route, Routes } from 'react-router-dom';
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
    <div className="app__wrapper">
      <Header />
      <div className="page__wrapper">
        <SideBar />
        <div className="page__content">
          <Routes>
            <Route
              path="/profile/*"
              element={<Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost} 
                updateNewPostText={props.updateNewPostText}/>} />
            <Route
              path="/messages/*"
              element={<Messages
                messagesPage={props.state.messagesPage} />} />
            <Route
              path="/options/*"
              element={<Options />} />
            <Route
              path="/news/*"
              element={<News />} />
            <Route
              path="/music/*"
              element={<Music />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
