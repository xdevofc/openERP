import {Routes, Route} from 'react-router-dom'
import App from '../App'
import NotFound from '../pages/NotFound'
import RegistrarMiembro from '../pages/RegistrarMiembro'

const AppRoutes = () => {
    return (

    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/registrar" element={<RegistrarMiembro/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
)}

export default AppRoutes