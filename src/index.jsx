import './style.css'
import './normalize.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Header from './Header.jsx'
import Main from './Main.jsx'
import Main2 from './Main-2.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>  
    <Canvas className='r3f'>
            <Experience />
        </Canvas>
    <div className="main-html">
        <Header />
        <Main />
        <Main2 />
    </div>
        
    </>
)           