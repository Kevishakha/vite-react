
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './card.jsx'
import BgChange from './bgchanger.jsx'

createRoot(document.getElementById('root')).render(
 <>
   <App/>
   <BgChange/>
   <Card/>
   </>
)
