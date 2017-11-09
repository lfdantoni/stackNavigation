import {StackNavigator} from 'react-navigation'
import StackDashboard from './StackDashboard'

const StackLogin = StackNavigator({
    StackDashboard: {screen: StackDashboard}
}, {
    headerMode: 'none',
    initialRouteName: 'StackDashboard',
    title: 'Main'
})

export default StackLogin