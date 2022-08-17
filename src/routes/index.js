import { useRoutes } from 'react-router-dom';
import { useEffect } from 'react';
import MessagesScreen from '../pages/messages';

const HomeElement = () => {
    useEffect(() => {
console.log("i got here")
    } , [])
    return <div>
        kkdkddkd
    </div>
}



// ===========================|| ROUTING RENDER ||=========================== //

export default function ThemeRoutes() {

    return useRoutes([{
        path: '/',
        element: <MessagesScreen />}]);
}
