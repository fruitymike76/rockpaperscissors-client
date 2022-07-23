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
    return (
        <>
            <GlobalHooks />
            <Routes location={location}>
                <Route element={

                    <Menu path={location.pathname}>
                        <Outlet />
                    </Menu>
                }>
                    <Route path='/rockpaperscissors-client/' element={<Home />} />
                    <Route path='/rockpaperscissors-client/newgame' element={<NewGame />} />
                    <Route path='/rockpaperscissors-client/game' element={<Game />} />
                    <Route path='/rockpaperscissors-client/referral' element={<Reference />} />
                    <Route path='/rockpaperscissors-client/findgames' element={<FindGames />} />
                    <Route path='/rockpaperscissors-client/claim' element={<Claim />} />
                    <Route path='*' element={<Navigate to='/rockpaperscissors-client' />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
