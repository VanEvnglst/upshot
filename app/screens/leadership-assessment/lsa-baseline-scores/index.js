import React, {useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View, processColor,
  SafeAreaView,
  Image,
  BackHandler,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from 'app/assets/images';
import {RadarChart} from 'react-native-charts-wrapper';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import leadershipSkillAreaActions from 'app/store/LSARedux';
import * as NavigationService from 'app/services/NavigationService';

const BaselineScore = props => {
  
  const { navigation } = props;
  const dispatch = useDispatch();

  const retrieveDataExtended = async () => {
    await dispatch(leadershipSkillAreaActions.fetchExtendedQuestions());
      debugger;
      setTimeout(() => {
        navigation.navigate('Leadership Assessment Extended');
    }, 300);
  };
  
  const skillList = [
    {
      id: 1,
      title: 'Empathy 💓',
      score: '50',
      barColor: '#F690A9',
      borderColor: '#F690A9'
    },
    {
      id: 2,
      title: 'Curiosity 🧠',
      score: '50',
       barColor: '#D394EA',
      borderColor: '#D394EA'
    },
    {
      id: 3,
      title: 'Authenticity 👐',
      score: '40',
       barColor: '#80DBAA',
      borderColor: '#80DBAA'
    },
    {
      id: 4,
      title: 'Achievement-Orientation 🏅',
      score: '20',
       barColor: '#EDA875',
      borderColor: '#EDA875'
    },
    {
      id: 5,
      title: 'Trust Building 🤝 ',
      score: '30',
       barColor: '#8089DB',
      borderColor: '#8089DB'
    },
  ]

  const [shouldExpand, setShouldExpand] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState({
    id: 1,
    title: '',
    score: '',
  });


    
  const handleSkillSelection = ( item ) => {
    setSelectedSkill(item);
    
  }

  
    return (
      <View style={styles.container}>
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={{ borderBottomWidth: 2, borderColor: '#FFCAAA',backgroundColor: '#FFFCF5', height: '10%'}}>
    </View>
    <View style={{alignItems: 'center', marginTop: -60, marginBottom: 30 }}>
          <View style={styles.userContainer}>
      <View style={styles.userIcon}>
        <Image
          source={Images.smileyAvatar}
          resizeMode='contain'
          style={styles.avatarIcon}
        />
          </View>
          </View>
      <View stlye={styles.userDetailsContainer}>
        <Text style={styles.userNameText}>Jaykey del Mar</Text>
        <Text style={styles.userLevelText}>Level 1</Text>
      </View>
    </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
         {/* <View style={{backgroundColor: 'red'}}> */}
        <View style={styles.radarContainer}>
          <RadarChart style={styles.chart}
            //xAxis={valueFormatterPattern ["PRV", "HR", "RR", "O2", "E.A.", "ASI", "PAI"] }
            //chartDescription={{ text: "Sample Chart" }}
              marker={{ enabled: true, digits: 2 , markerColor: 10, textSize: 12}}
            drawWeb={false}
            webLineWidth={1}
            webLineWidthInner={2}
            webAlpha={255}
            webColor={processColor("white")}
            webColorInner={processColor("white")}
            skipWebLineCount={5}
              
            //onChange={event => console.log(event.nativeEvent)}
            rotationAngle={-180}
            
        data= {
          $set={
            dataSets: [
              {
                values: [
                  { value: .20 , marker: '20'},
                  { value: .23 , marker: '23'},
                  { value: .10 },
                  { value: .42 },
                  { value: .38 },
                  
                ],
                custom: {labels: ""},
                config: {
                  color: processColor("#667080"),
                  drawFilled: true,
                  fillColor: processColor("#D9C5C5"),
                  fillAlpha: 100,
                  lineWidth: 2,
                  drawValues: false
                }
              },
              

              
            ]
          }
        }
        xAxis= {
          $set={
            valueFormatter: [skillList[0].score, skillList[1].score, skillList[2].score, skillList[3].score, skillList[4].score],
          }
        }
        yAxis= {
          $set={
            axisMinimum: 0,
            axisMaximum: .5,
            enabled: false,
          }
        }
      
        

            
              />
              </View>

        </View>

        <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: '700', fontSize: 16, lineHeight: 30, color: "#667080", marginVertical: 12}}>Points Breakdown</Text>
        </View>
          <View style={{ flex: 1, paddingHorizontal: 16, }}>
            {skillList.map((item, i) => (
              <TouchableOpacity
                accessibilityRole='button'
                onPress={() => handleSkillSelection(item)}
                style={{
                  borderWidth: selectedSkill.id === item.id ? 1 : 0.3,
                  padding: 12,
                  minHeight: 56,
                  marginBottom: 12,
                  borderRadius: 12,
                  borderColor: selectedSkill.id === item.id ? item.borderColor : '#667080',
                }}
              >
                <View>
                  <View style={{ marginBottom: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text>{item.title}</Text>
                    <Text>{`${item.score} / 100`}</Text>
                  </View>
                  <ProgressBar
                    progress={0.5}
                    color={item.barColor}
                    style={{ height: 6, borderRadius: 6 }}
                  />
                </View>
                {selectedSkill.id === item.id &&
                  <View style={{ marginTop: 24 }}>
                    <View style={{ marginBottom: 16 }}>
                      <Text style={{fontSize: 14, fontWeight: '700', lineHeight: 22, color: "#667080"}}>About this Score 💪</Text>
                      <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 14, lineHeight: 22, fontWeight: '400', color: '#667080'}}>The act of putting yourself in someone else's problem in the hopes of understanding</Text>
                    </View>
                    <View style={{ marginBottom: 16 }}>
                      <Text style={{fontSize: 14, fontWeight: '700', lineHeight: 22, color: "#667080"}}>The Higher the Score 🚀</Text>
                      <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 14, lineHeight: 22, fontWeight: '400', color: '#667080'}}>The more committed you are in understanding of how others feel, both emotionally and through action</Text>
                    </View>
                    <View style={{ marginBottom: 16 }}>
                      <Text style={{fontSize: 14, fontWeight: '700', lineHeight: 22, color: "#667080"}}>Growth Opportunities 👀</Text>
                      <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 14, lineHeight: 22, fontWeight: '400', color: '#667080'}}><Text style={{ fontSize: 6}}>{'\u2B24'}</Text> Recognize that it's fine to not know how others feel
                      </Text>
                      <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 14, lineHeight: 22, fontWeight: '400', color: '#667080'}}><Text style={{ fontSize: 6}}>{'\u2B24'}</Text> Practice active listening (make eye contact, listen to the tone of voice etc.)
                      </Text>
                    </View>
                
                  </View>}
              </TouchableOpacity>
              
            ))}
           
          </View>
          <View style={{ height: 200, marginVertical: 50, marginHorizontal: 16}} >
          
          <Button
            style={{
              height: 48,
              backgroundColor: '#667080',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            mode="outlined"
            onPress={() => NavigationService.navigate('Home', { screen: 'Home' })}>
            <Text style={{
            color: "white",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    textAlign: 'center'
          }}>Complete Assessment</Text>  
            </Button>
            </View>
        </ScrollView>
        </View>
    );
}

export default BaselineScore;



const styles = StyleSheet.create({
   container: {
    flex:1 
  },
  userContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    width: 58,
    height: 58,
    borderRadius: 58/2,
    backgroundColor: '#FFF3D4',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarIcon: {
    width: 38,
    height: 38
  },
  userDetailsContainer: {
    flex: 1,
  },
  userNameText: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: '#667080'
  },
  userLevelText: {
    marginTop: 4,
    marginBottom: 8,
    color: "#667080",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    textAlign: 'center'
  },
  radarContainer: {
    minWidth: 255,
    minHeight: 255,
    borderRadius:  128,
    backgroundColor: '#EEF1F4',
    justifyContent: 'center',
  },
  chart: {
    flex: 1
  },
  cardContainer: {
    marginBottom: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#0000001F',
  },
  cardContentStyle: {
        flexDirection: 'row',

    },

});