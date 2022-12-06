import {
  createBrowserRouter,
} from 'react-router-dom';

import { StartPage } from '@/pages/startPage';
import { ErrorPage } from '@/pages';
import { GameStartPage } from '@/pages';
import { GamePlayPage } from '@/pages';
import { GameOverPage } from '@/pages';
import { SigninPage } from './signinPage';
import { SignupPage } from './signupPage';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: '/game',
    element: <GameStartPage />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: '/game-play',
    element: <GamePlayPage />,
    errorElement: <GameStartPage />,
    children: [],
  },
  {
    path: '/game-over',
    element: <GameOverPage />,
    errorElement: <GameStartPage />,
    children: [],
  },
  {
    path: '/signin',
    element: <SigninPage />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: '/signup',
    element: <SignupPage />,
    errorElement: <ErrorPage />,
    children: [],
  },
])
