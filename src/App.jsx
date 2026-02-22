import './App.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import MainBoard from './pages/MainBoard';
import Login from './pages/Login';
import Chat from './pages/Chat';
import MyPage from './pages/MyPage';
import Home from './pages/Home';
import GithubRanking from './pages/GithubRanking';
import BOJRanking from './pages/BOJRanking';
import Post from './pages/Post';
import Resume from './pages/Resume';
import PostForm from './pages/PostForm';
import Signup from '@pages/Signup';
import PrivateRoute from '@components/common/PrivateRoute';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path='posts' element={<MainBoard />} />
            <Route path='posts/write' element={<PostForm />} />
            <Route path='post/:id' element={<Post />} />
            <Route path='home' element={<Home />} />
            <Route path='chat' element={<Chat />} />
            <Route path='my' element={<MyPage />} />
            <Route path='githubRanking' element={<GithubRanking />} />
            <Route path='bojRanking' element={<BOJRanking />} />
            <Route path='resume' element={<Resume />} />
          </Route>
        </Route>

        <Route path='/'>
          <Route path='signup' element={<Signup />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
