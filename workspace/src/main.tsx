import React from 'react'
import ReactDOM from 'react-dom/client'
import { PostApp } from './ui/components/post/PostApp.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PostApp />

  </React.StrictMode>,
)
