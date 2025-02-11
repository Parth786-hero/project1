import {Routes , Route} from 'react-router-dom';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Analytics from '../pages/Analytics';
import Products from '../pages/Products';
import {Typography} from '@mui/material';
const Error = ()=>{
    return(
        <>
            <Typography variant='h3'>404 ! This page does not exist</Typography>
        </>
    );
}
function App(){
    return(
        <>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/products" exact element={<Products/>}/>
                <Route path="/analytics" exact element={<Analytics/>}/>
                <Route path="/settings" exact element={<Settings/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </>
    );
}
export default App;