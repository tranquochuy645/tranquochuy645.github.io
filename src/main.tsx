import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './keyframes.css'
import BackGround from'./BackGround.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <App />
    <BackGround/>
  </>,
)
