import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Button, ProgressBar } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons'

const LsaTestSign1 = props => {

    return (
        <View style={{flex: 1, paddingHorizontal: 19}}>
        <SafeAreaView>
            <TouchableOpacity 
                accessibilityRole='button' 
                style={{paddingLeft: 18}}>
                <Icon 
                    name='chevron-back-outline' 
                    size={24}
                    font-size='6px'
                    onPress={()=> navigation.navigate('')}></Icon>
            </TouchableOpacity>
            
            <ProgressBar 
            progress={328/328}
            color={'#667080'}
            style ={{marginLeft: 9, paddingRight: 19, marginTop: 18}}>
            </ProgressBar>
            
            </SafeAreaView>
            
            <View style={{flex: 1, marginTop: 84, backgroundColor: 'red'}}>
                <Text>Sheesh</Text>
            </View>

            <View style={{flex: 1, marginTop: 84, height: 114}}>
                <Text style={{fontSize: 32, fontWeight: '700', lineHeight: 36, color: '#667080', width: 338, height: 36, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>Off to a good start!</Text>

                <Text style={{fontSize: 14, fontWeight: '400', lineHeight: 22, marginTop: 12, height: 66, color: '#667080', maxWidth: 307, textAlign: 'center', justifyContent: 'center', alignItems: 'center', marginLeft: 15.5}}>
                    Good job on finishing your initial assessment! Next, you can see how you're doing in different leadership skill areas. ☺️</Text>
            </View>

            <View style={{flex: 1, marginTop: 120}}>
            <Button 
                onPress={() => navigation.navigate('')}
                mode='contained' 
                style={{marginLeft: 5, backgroundColor:'#667080', width: 322, height: 48, justifyContent: 'center'}}> 
                <Text style={{fontSize: 16, fontWeight: '700', color: '#FFFFFF', justifyContent: 'center', alignContent: 'center', paddingVertical: 13}}>Continue</Text>
            </Button>
            </View>


         </View>
    )
};

export default LsaTestSign1;