import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Books } from './features/books/books.jsx'
import { Comments } from './features/comments/comments.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'
import 'bootstrap/dist/css/bootstrap.css';

const router = createBrowserRouter([
  {
    path: '',
    element: <Books />
  },
  {
    path: '/book/:id',
    element: <Comments />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
