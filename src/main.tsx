import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.tsx'
import Record from './Record.tsx'
import Hobby from './Hobby.tsx'
import Blog from './Blog.tsx'
// import App from './App.tsx'
import Introduction from './Introduction.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Introduction />
    <Record/>
    <Hobby />
    <Blog />
     {/* <App /> */}
  </StrictMode>
)
