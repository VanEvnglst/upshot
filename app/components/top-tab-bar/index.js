import { Animated, View, TouchableOpacity } from 'react-native';

const TopTabBar = ({ state, descriptors, navigation, position }) => {
  return (
    <View style={{ flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type:"tabLongPress",
              target: route.key
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ?1 : 0)),
          });

          return (
            <TouchableOpacity
              accessibilityRole='button'
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              // test
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1}}
            >
              <Animated.Text style={{ opacity }}>
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
      })}
    </View>
  );
}