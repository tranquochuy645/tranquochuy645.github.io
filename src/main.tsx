import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import BackGround from'./components/BackGround/BackGround.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <App />
    <BackGround/>
  </>,
)
