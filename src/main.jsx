import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import SomaticMindfulness from './pages/SomaticMindfulness'
import CognitiveReframing from './pages/CognitiveReframing'
import BreathworkRegulation from './pages/BreathworkRegulation'
import Psychotherapy from './pages/Psychotherapy'
import Blog from './pages/Blog'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/somatic-mindfulness" element={<SomaticMindfulness />} />
        <Route path="/cognitive-reframing" element={<CognitiveReframing />} />
        <Route path="/breathwork-regulation" element={<BreathworkRegulation />} />
        <Route path="/psychotherapy" element={<Psychotherapy />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
