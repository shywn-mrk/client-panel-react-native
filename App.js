import React, {Component} from 'react';

import SplashScreen from 'react-native-splash-screen'

import SwitchNavigator from './src/navigators/SwitchNavigator';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from './context'

class App extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }

  render() { 
    return (
      <Provider>
        <NavigationContainer>
          <SwitchNavigator />
        </NavigationContainer>
    </Provider>
    );
  }
}
 
export default App;