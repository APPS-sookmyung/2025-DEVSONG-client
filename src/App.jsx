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
import GithubRanking from './pages/GithubRanking';
import Post from './pages/Post';
import Resume from './pages/Resume';
import PostForm from './pages/PostForm';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='posts' element={<MainBoard />} />
        <Route path='posts/write' element={<PostForm />} />
        <Route path='post/:id' element={<Post />} />
        <Route path='chat' element={<Chat />} />
        <Route path='my' element={<MyPage />} />
        <Route path='githubRanking' element={<GithubRanking />} />
        <Route path='resume' element={<Resume />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
