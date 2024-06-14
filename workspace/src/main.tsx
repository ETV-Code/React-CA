import React from 'react'
import ReactDOM from 'react-dom/client'
// @ts-ignore
import { PostApp } from './ui/components/PostApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PostApp />

  </React.StrictMode>,
)
