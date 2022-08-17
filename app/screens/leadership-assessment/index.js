import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Button, ProgressBar } from "react-native-paper";
import { color } from "react-native-reanimated";
import Icon from 'react-native-vector-icons/Ionicons'
import { LsaTestSign1 } from '../leadership-assessment/lsa-test-signpost1'



const LeadershipAssessment = props => {
    const {navigation} = props;
    

    return (
        <View style={{flex: 1, paddingHorizontal: 24}}>
           <SafeAreaView>
            <TouchableOpacity 
                accessibilityRole='button' 
                style={{paddingLeft: 13}}>
                <Icon 
                    name='chevron-back-outline' 
                    size={24} 
                    font-size='6px'
                    onPress={()=> navigation.navigate('')}></Icon>
            </TouchableOpacity>
            
            <ProgressBar 
            progress={82/328}
            color={'#667080'}
            style ={{marginLeft: 3, paddingRight: 19, marginTop: 8}}>
            </ProgressBar>

          
          
           
           </SafeAreaView>
           <ScrollView>
           <View style={{flex: 1, backgroundColor:'red', marginTop: 52, marginHorizontal: 4, width: 306, height: 168}}>
            
          </View>
          <View style={{flex: 1, marginTop: 72}}>
          <Text style={{fontSize: 32, fontWeight: '700', maxWidth: 278, lineHeight: 36, justifyContent:'center', alignItems:'center'}}>{'Ready to start\nyour journey?'}
           </Text>

           <Text style={{marginTop: 27, maxWidth: 322, fontSize: 16, maxHeight: 129, fontWeight: '400', paddingLeft: 4}}>
            {'Be yourself and answer honestly to find out your strengths in 5 leadership skill areas. Doing this will help us build your personalized leadership profile.\n\nIt will take 2 minutes or less.'}
           </Text>

           <Text style={{marginTop: 61, fontSize: 12, fontWeight: '400', marginLeft: 34, justifyContent: 'center', alignItems: 'center'}}>
            {"This is based on Daniel Goleman's <source>"}
           </Text>

          </View>

          <View>
            <Button 
                onPress={() => navigation.navigate('Leadership Assessment Signpost 1')}
                mode='contained' 
                style={{marginTop: 12, backgroundColor:'#667080', width: 322}}> 
                <Text style={{fontSize: 16, fontWeight: '700', color: '#FFFFFF', justifyContent: 'center', alignContent: 'center', paddingVertical: 13}}>Start Now</Text>
            </Button>
          </View>
          </ScrollView>
        </View>

        
    )
    
};




export default LeadershipAssessment;

