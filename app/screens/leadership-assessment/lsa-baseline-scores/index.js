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
import LeadershipSkillAreaActions from 'app/store/LSARedux';
import * as NavigationService from 'app/services/NavigationService';


const BaselineScore = props => {
  
  const { navigation } = props;
  const dispatch = useDispatch();
  
  // useEffect(() => {
  //   dispatch(LeadershipSkillAreaActions.fetchBaselineScores());
  // }, []);

  const scores = useSelector(state => state.leadershipSkillArea.get('extendedTestResults'));
  const user = useSelector(state => state.user.userName);
  
  const retrieveDataExtended = async () => {
    await dispatch(LeadershipSkillAreaActions.fetchExtendedQuestions());
      debugger;
      setTimeout(() => {
        navigation.navigate('Leadership Assessment Extended');
    }, 300);
  };
  
  const skillList = [
    {
      id: 4,
      title: 'Achievement-Orientation',
      icon: '🏅',
      score: scores && scores[3].ave,
      scoreLevel: scores && scores[3].area,
       barColor: '#EDA875',
      borderColor: '#EDA875'
    },
    {
      id: 2,
      title: 'Openness to Learn',
      icon: '🧠',
      score: scores && scores[4].ave,
      scoreLevel: scores && scores[4].area,
       barColor: '#D394EA',
      borderColor: '#D394EA'
    },
    {
      id: 5,
      title: 'Trust Building',
      icon: '🤝',
      score: scores && scores[1].ave,
      scoreLevel: scores && scores[1].area,
       barColor: '#8089DB',
      borderColor: '#8089DB'
    },
    {
      id: 1,
      title: 'Empathy',
      icon: '💓',
      score: scores && scores[0].ave,
      scoreLevel: scores && scores[0].area,
      barColor: '#F690A9',
      borderColor: '#F690A9'
    },
    {
      id: 3,
      title: 'Authenticity',
      icon: '👐',
      score: scores && scores[2].ave,
      scoreLevel: scores && scores[2].area,
       barColor: '#80DBAA',
      borderColor: '#80DBAA'
    },
    
  ]

  const [shouldExpand, setShouldExpand] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState({
    id: 4,
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
              <Text style={styles.userNameText}>{ user }</Text>
        <Text style={styles.userLevelText}>Level 1</Text>
      </View>
    </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
         {/* <View style={{backgroundColor: 'red'}}> */}
        <View style={styles.radarContainer}>
          { scores && scores[0].ave ?
                <RadarChart style={styles.chart}
                  //xAxis={valueFormatterPattern ["PRV", "HR", "RR", "O2", "E.A.", "ASI", "PAI"] }
                  //chartDescription={{ text: "Sample Chart" }}
                  marker={{ enabled: false, digits: 2, markerColor: processColor('#F0C0FF8C'), textColor: processColor('red'), textSize: 12, textAlign: 'center' }}
                  legend={{ enabled: false }}
                  drawWeb={false}
                  webLineWidth={1}
                  webLineWidthInner={2}
                  webAlpha={255}
                  webColor={processColor("white")}
                  webColorInner={processColor("white")}
                  skipWebLineCount={5}
              
                  //onChange={event => console.log(event.nativeEvent)}
                  rotationAngle={-180}
            
                  data={
                    $set = {
                      dataSets: [
                        {
                
                          values: [
                            { value: scores[3].ave, marker: '🏅'},
                            { value: scores[4].ave, marker: '🧠'},
                            { value: scores[1].ave, marker: '🤝' },
                            { value: scores[0].ave, marker: '💓' },
                            { value: scores[2].ave, marker: '👐' }
                  
                          ],
                
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
                  xAxis={
                    $set = {
                      valueFormatter: [skillList[0]?.icon, skillList[1]?.icon, skillList[2]?.icon, skillList[3]?.icon, skillList[4]?.icon],
                    }
                  }
                  yAxis={
                    $set = {
                      axisMinimum: 0,
                      axisMaximum: 5,
                      centerAxisLabels: true,
                      enabled: false,
                    }
                  }
                />
                :
                <RadarChart style={styles.chart}
            //xAxis={valueFormatterPattern ["PRV", "HR", "RR", "O2", "E.A.", "ASI", "PAI"] }
            //chartDescription={{ text: "Sample Chart" }}
              marker={{ enabled: true, digits: 2 , markerColor: processColor('#F0C0FF8C'), textColor: processColor('red'),textSize: 12, textAlign: 'center'}}
            legend={{enabled: false}}
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
                
                values: 
                  [                          
                  { value: .50 },
                  { value: .50 },
                  { value: .40 },
                  { value: .20 },
                  { value: .20}
                  
                ],
                
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
            valueFormatter: [ skillList[0]?.score , skillList[1]?.score, skillList[2]?.score, skillList[3]?.score, skillList[4]?.score],
          }
        }
        yAxis= {
          $set={
            axisMinimum: 0,
            axisMaximum: .5,
            centerAxisLabels: true,
            enabled: false,
          }
        }            
              />
              }
              </View>

        </View>

        <View style={{ flex: 1}}>
            <Text style={{ fontWeight: '600', fontSize: 10, lineHeight: 10, color: "#B1B5C3", marginTop: 15, textTransform: 'uppercase', paddingHorizontal: 16 }}>leadership skill areas</Text>
            <Text style={{fontWeight: '600', fontSize: 24, lineHeight: 30, color: "#667080", marginTop: 4, marginBottom: 24, textTransform: 'uppercase', paddingHorizontal: 16}}>Indicator Levels</Text>
        </View>
          <View style={{ flex: 1, paddingHorizontal: 16, }}>
            {skillList.map((item, i) => (
              <TouchableOpacity
                accessibilityRole='button'
                onPress={() => handleSkillSelection(item)}
                style={{
                  borderWidth: 2 ,
                  padding: 12,
                  minHeight: 56,
                  marginBottom: 12,
                  borderRadius: 12,
                  borderColor: '#B1B5C370',
                  color: '#FFFFFF'
                }}
                key={item.id}
              >
                <View>
                  <View style={{ marginBottom: 6}}>
                    <Text>{item.title} {item.icon}</Text>
                    {/* <Text>{`${item.score} / 100`}</Text> */}
                  </View>
                  { item.scoreLevel === 'Promising Area' ?
                  <View style={{color: '#D7FFDC', borderColor: '#9EFCAA', borderWidth: 1, height: 20, borderRadius: 4, maxWidth: 120}}>
                      <Text style={{ textTransform: 'uppercase', color: '#3AB549', fontSize: 11, fontWeight: '600', lineHeight: 10, margin: 4, letterSpacing: 0.05, textAlign: 'center', textAlignVertical: 'center'}}>Promising Area</Text>
                  </View>
                    : 
                    item.scoreLevel === 'Area of Concern' ?
                  <View style={{color: '#FFE4EA', borderColor: '#FF9C9C', borderWidth: 1, height: 20, borderRadius: 4, maxWidth: 132, }}>
                    <Text style={{textTransform: 'uppercase', color: '#FF5656', fontSize: 11, fontWeight: '600', lineHeight: 10, margin: 4, letterSpacing: 0.05, textAlign: 'center', textAlignVertical: 'center'}}>Area of concern</Text>
                  </View>
                      :
                      item.scoreLevel === 'Area of Continued Development' ?
                  <View style={{color: '#FFF0E1', borderColor: '#FFB26A', borderWidth: 1, height: 20, borderRadius: 4, maxWidth: 220}}>
                    <Text style={{textTransform: 'uppercase', color: '#FF8C21', fontSize: 11, fontWeight: '600', lineHeight: 10, margin: 4, letterSpacing: 0.05, textAlign: 'center', textAlignVertical: 'center'}}>area of continued development</Text>
                        </View>
                        :
                        <></>
                  }
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
            onPress={() => navigation.navigate('Assessment', { screen: 'Extended Assessment Wrap Up' })}>
            <Text style={{
            color: "white",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    textAlign: 'center'
          }}>Finish Building Profile</Text>  
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