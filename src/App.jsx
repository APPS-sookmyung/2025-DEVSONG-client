import './App.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import MainBoard from './pages/MainBoard';
import Chat from './pages/Chat';
import MyPage from './pages/MyPage';
import Home from './pages/Home';
import Profile from './pages/Profile';
import GithubRanking from './pages/GithubRanking';
import Post from './pages/Post';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='posts' element={<MainBoard />} />
        <Route path='posts/:category' element={<MainBoard />} />
        <Route path='post/:id' element={<Post />} />
        <Route path='chat' element={<Chat />} />
        <Route path='profile' element={<Profile />} />
        <Route path='my' element={<MyPage />} />
        <Route path='github-ranking' element={<GithubRanking />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
