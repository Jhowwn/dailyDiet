import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details } from "@screens/details";
import { Feedback } from "@screens/feedback";
import { Home } from "@screens/home";
import { New } from "@screens/new";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='feedback'
        component={Feedback}
      />
      <Screen
        name='home'
        component={Home}
      />
      <Screen
        name='details'
        component={Details}
      />
      <Screen
        name='new'
        component={New}
      />
      {/* <Screen
        name='feedback'
        component={Feedback}
      /> */}
    </Navigator>
  )
}
