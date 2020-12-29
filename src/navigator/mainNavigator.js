import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen316467Navigator from '../features/BlankScreen316467/navigator';
import BlankScreen116418Navigator from '../features/BlankScreen116418/navigator';
import BlankScreen016415Navigator from '../features/BlankScreen016415/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen316467: { screen: BlankScreen316467Navigator },
BlankScreen116418: { screen: BlankScreen116418Navigator },
BlankScreen016415: { screen: BlankScreen016415Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
