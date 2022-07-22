import { Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';

import { Menu } from './components/Menu';
import { useAccountEventListener, useEagerConnect } from './hooks';
import { Home, Game, Reference, FindGames, NewGame, Claim } from './routes';

function GlobalHooks() {
    useEagerConnect();
    useAccountEventListener();
    return null;
}

const App = () => {
    const location = useLocation();
    const key = location.key;
    return (
        <>
            <GlobalHooks />
            <Routes location={location}>
                <Route element={

                    <Menu path={location.pathname}>
                        <Outlet />
                    </Menu>
                }>
                    <Route path='/' element={<Home />} />
                    <Route path='/newgame' element={<NewGame />} />
                    <Route path='/game' element={<Game />} />
                    <Route path='/referral' element={<Reference />} />
                    <Route path='/findgames' element={<FindGames />} />
                    <Route path='/claim' element={<Claim />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
