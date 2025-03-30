import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Image, View } from 'react-native';


//HOME NAVIGATION
export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#28AF6E',
      headerShown: false,
      tabBarStyle: {
        height: 60,
      },
    }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/icons/home-icon.png')}
              style={{ width: 25, height: 25, tintColor: color }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="diagnose"
        options={{
          title: 'Diagnose',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/icons/diagnose-icon.png')}
              style={{ width: 25, height: 25, tintColor: color }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="qr"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <View style={
              {
                alignItems: "center",
                justifyContent: "center",
                height: 64,
                width: 64,
                backgroundColor: "#28AF6E",
                borderRadius: "50%",
                marginBottom: 20,
                borderWidth: 4,
                borderColor: "#2CCC80"
              }
            }>
              <Image
                source={require('../../assets/images/icons/qr-icon.png')}
                style={{ width: 27, height: 27, tintColor: "white" }}
              />
            </View>

          ),
        }}
      />

      <Tabs.Screen
        name="myGarden"
        options={{
          title: 'My Garden',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/icons/garden-icon.png')}
              style={{ width: 25, height: 25, tintColor: color }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/icons/profile-icon.png')}
              style={{ width: 25, height: 25, tintColor: color }}
            />
          ),
        }}
      />
    </Tabs>
  );
}