import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Button, ProgressBar } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons'


const LsaTest = props => {
    const { navigation } = props;
    const questionOption = [
        {
            key: '1',
            optn: 'Always',
            value: '5',
        },
        {
            key: '2',
            optn: 'Often',
            value: '4',
        },
        {
            key: '3',
            optn: 'Sometimes',
            value: '3',
        },
        {
            key: '4',
            optn: 'Rarely',
            value: '2',
        },
        {
            key: '5',
            optn: 'Never',
            value: '1',
        },
    ];

    const optnList = () => {
        return questionOption.map((element) => {
            return (
                <Button mode="contained" key={element.key} style={{ marginTop: 24, borderRadius: 24, height: 40, width: 321, color: '#EEF1F4'}}>
                    <Text style={{fontSize: 14, fontWeight: '700'}}>{element.optn}</Text>
                </Button>
            );
        });
    };



    return (
        <View style={{flex: 1, paddingHorizontal: 22}}>
            <SafeAreaView>
                <TouchableOpacity 
                accessibilityRole='button' 
                style={{paddingLeft: 15}}>
                <Icon 
                    name='chevron-back-outline' 
                    size={24} 
                    font-size='6px'
                    onPress={()=> navigation.navigate('Leadership Assessment')}></Icon>
            </TouchableOpacity>
            
            <ProgressBar 
            progress={82/328}
            color={'#667080'}
            style ={{marginLeft: 6, paddingRight: 19, marginTop: 18}}>
            </ProgressBar>

            </SafeAreaView>
            <ScrollView>

            <View style={{ flex: 1, marginTop: 46 }}>
                <Text style={{ width: 321, height: 22, lineHeight: 22, fontSize: 16, fontWeight: '400', color: '#667080' }}>
                    Which option sounds more like you? 🤔
                </Text>

                <Text style={{ width: 332, height: 60, marginTop: 24, fontWeight: '700', fontSize: 24, lineHeight: 30, color: '#667080' }}>
                    I am able to see things from the other person's viewpoint.
                </Text>
            </View>

            <View style={{ flex: 1 }}>{optnList()}
            </View>
            
                <View style={{ flex: 1, marginTop: 63 }}>
                    <Text style={{ marginTop: 63, marginLeft: 59, width: 214, fontWeight: '400', fontSize: 16, lineHeight: 22, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        Questions
                    </Text>

                    <Text style={{ marginTop: 4, marginLeft: 142.5, width: 47, height: 30, fontSize: 24, fontWeight: '700', lineHeight: 30 }}>
                        1/15
                    </Text>

            </View>
            </ScrollView>
        </View>
    )
};

export default LsaTest;