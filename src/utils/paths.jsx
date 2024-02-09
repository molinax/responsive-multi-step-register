import Home from '../components/pages/Home'
import NotFound from '../components/pages/NotFound'
import Topics from '../components/pages/Topics'

export const paths = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/topics',
    element: <Topics />
  },
  {
    path: '*',
    element: <NotFound />
  }
]
