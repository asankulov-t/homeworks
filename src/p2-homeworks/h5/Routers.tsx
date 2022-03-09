import React from 'react'
import {Route, Navigate} from 'react-router-dom'
import PreJunior from "./pages/PreJunior";
import {Routes} from 'react-router-dom';
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function Routers() {
    return (
        <div>

            <Routes>
                <Route path={'/pre-junior'} element={<PreJunior/>}/>
                <Route path={'/junior'} element={<Junior/>}/>
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={'*'} element={<Error404/>}/>
            </Routes>
            {/*Switch выбирает первый подходящий роут*/}
            {/*<Switch>*/}

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            {/*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*/}

            {/*<Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>*/}
            {/*// add routes*/}

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            {/*<Route render={() => <Error404/>}/>*/}

            {/*</Switch>*/}
        </div>
    )
}

export default Routers