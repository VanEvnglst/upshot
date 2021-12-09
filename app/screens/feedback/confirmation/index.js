import React from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { Text, Wrapper } from 'app/components'; 
import Images from 'app/assets/images';

const ConfirmationScreen = props => {
  const { navigation, route } = props;

  return(
    <Wrapper>
      <View style={{ flex: 1}}>
        <Image
          source={Images.confirmation}
          resizeMode='contain'
        />
      </View>
      <View>
        <Text type='h4'>You did it!</Text>
        
      </View>
    </Wrapper>

  )
}

export default ConfirmationScreen;