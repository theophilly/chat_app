import { useRoutes } from 'react-router-dom';
import MessagesScreen from '../pages/messages';


export default function ThemeRoutes() {

    return useRoutes([{
        path: '/',
        element: <MessagesScreen />}]);
}
