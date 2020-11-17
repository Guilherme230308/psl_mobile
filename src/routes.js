import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import List from './pages/List';
import Detail from './pages/Detail';
import Message from './pages/Message';
import Menu from './pages/Menu';
import Profile from './pages/Profile';
import News from './pages/News';


const Routes = createAppContainer(
    createSwitchNavigator({
        List,
        Login,
        Menu,
        Message,
        Detail,
        Profile,
        News
    })
);

//Teste

export default Routes;