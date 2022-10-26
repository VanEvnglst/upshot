import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  ScrollView,
  View,
  processColor,
  BackHandler,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import { RadarChart } from 'react-native-charts-wrapper';
import { Text } from 'app/components';
import LeadershipSkillAreaActions from 'app/store/LSARedux';
import { aboutSkillArea } from 'app/models/LeadershipSkillAreaModel';
import styles from './styles';

const BaselineScore = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const scores = useSelector(state =>
    state.leadershipSkillArea.get('extendedTestResults'),
  );
  const user = useSelector(state => state.user.get('userName'));
  const [selectedSkill, setSelectedSkill] = useState({
    id: 5,
    title: '',
    score: '',
  });

  const skillList = [
    {
      id: 5,
      title: 'Achievement-Orientation',
      icon: '🏅',
      score: scores && scores[3].ave,
      scoreLevel: scores && scores[3].area,
      description: aboutSkillArea[0].description,
      areaOfConcern: {
        whatScoreMeans: aboutSkillArea[0].areaOfConcern.whatScoreMeans,
        skillPoints: aboutSkillArea[0].areaOfConcern.skillPoints,
      },
      areaOfContinuedDevelopment: {
        whatScoreMeans:
          aboutSkillArea[0].areaOfContinuedDevelopment.whatScoreMeans,
        skillPoints: aboutSkillArea[0].areaOfContinuedDevelopment.skillPoints,
      },
      promisingArea: {
        whatScoreMeans: aboutSkillArea[0].promisingArea.whatScoreMeans,
        skillPoints: aboutSkillArea[0].promisingArea.skillPoints,
      },
      barColor: '#EDA875',
      borderColor: '#EDA875',
    },
    {
      id: 4,
      title: 'Openness to Learn',
      icon: '🧠',
      score: scores && scores[4].ave,
      scoreLevel: scores && scores[4].area,
      description: aboutSkillArea[1].description,
      areaOfConcern: {
        whatScoreMeans: aboutSkillArea[1].areaOfConcern.whatScoreMeans,
        skillPoints: aboutSkillArea[1].areaOfConcern.skillPoints,
      },
      areaOfContinuedDevelopment: {
        whatScoreMeans:
          aboutSkillArea[1].areaOfContinuedDevelopment.whatScoreMeans,
        skillPoints: aboutSkillArea[1].areaOfContinuedDevelopment.skillPoints,
      },
      promisingArea: {
        whatScoreMeans: aboutSkillArea[1].promisingArea.whatScoreMeans,
        skillPoints: aboutSkillArea[1].promisingArea.skillPoints,
      },
      barColor: '#D394EA',
      borderColor: '#D394EA',
    },
    {
      id: 2,
      title: 'Trust Building',
      icon: '🤝',
      score: scores && scores[1].ave,
      scoreLevel: scores && scores[1].area,
      description: aboutSkillArea[2].description,
      areaOfConcern: {
        whatScoreMeans: aboutSkillArea[2].areaOfConcern.whatScoreMeans,
        skillPoints: aboutSkillArea[2].areaOfConcern.skillPoints,
      },
      areaOfContinuedDevelopment: {
        whatScoreMeans:
          aboutSkillArea[2].areaOfContinuedDevelopment.whatScoreMeans,
        skillPoints: aboutSkillArea[2].areaOfContinuedDevelopment.skillPoints,
      },
      promisingArea: {
        whatScoreMeans: aboutSkillArea[2].promisingArea.whatScoreMeans,
        skillPoints: aboutSkillArea[2].promisingArea.skillPoints,
      },
      barColor: '#8089DB',
      borderColor: '#8089DB',
    },
    {
      id: 3,
      title: 'Empathy',
      icon: '💓',
      score: scores && scores[0].ave,
      scoreLevel: scores && scores[0].area,
      description: aboutSkillArea[3].description,
      areaOfConcern: {
        whatScoreMeans: aboutSkillArea[3].areaOfConcern.whatScoreMeans,
        skillPoints: aboutSkillArea[3].areaOfConcern.skillPoints,
      },
      areaOfContinuedDevelopment: {
        whatScoreMeans:
          aboutSkillArea[3].areaOfContinuedDevelopment.whatScoreMeans,
        skillPoints: aboutSkillArea[3].areaOfContinuedDevelopment.skillPoints,
      },
      promisingArea: {
        whatScoreMeans: aboutSkillArea[3].promisingArea.whatScoreMeans,
        skillPoints: aboutSkillArea[3].promisingArea.skillPoints,
      },
      barColor: '#F690A9',
      borderColor: '#F690A9',
    },
    {
      id: 1,
      title: 'Authenticity',
      icon: '👐',
      score: scores && scores[2].ave,
      scoreLevel: scores && scores[2].area,
      description: aboutSkillArea[4].description,
      areaOfConcern: {
        whatScoreMeans: aboutSkillArea[4].areaOfConcern.whatScoreMeans,
        skillPoints: aboutSkillArea[4].areaOfConcern.skillPoints,
      },
      areaOfContinuedDevelopment: {
        whatScoreMeans:
          aboutSkillArea[4].areaOfContinuedDevelopment.whatScoreMeans,
        skillPoints: aboutSkillArea[4].areaOfContinuedDevelopment.skillPoints,
      },
      promisingArea: {
        whatScoreMeans: aboutSkillArea[4].promisingArea.whatScoreMeans,
        skillPoints: aboutSkillArea[4].promisingArea.skillPoints,
      },
      barColor: '#80DBAA',
      borderColor: '#80DBAA',
    },
  ];

  useEffect(() => {
    dispatch(LeadershipSkillAreaActions.fetchBaselineScores());
  }, []);

  const retrieveDataExtended = async () => {
    await dispatch(LeadershipSkillAreaActions.fetchExtendedQuestions());
    setTimeout(() => {
      navigation.navigate('Leadership Assessment Extended');
    }, 300);
  };

  const handleSkillSelection = item => {
    setSelectedSkill(item);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.greetingContainer}>
          <View style={styles.userDetailsContainer}>
            <Text type="caption3" weight="semiBold" style={styles.userNameText}>
              Hi {user}!
            </Text>
            <Text type="body1" weight="bold" style={styles.userLevelText}>
              Here is your Leadership Profile Results! 🎉
            </Text>
          </View>
        </View>
        <View style={styles.radarContainer}>
          {scores && scores[0].ave ? (
            <RadarChart
              style={styles.chart}
              //xAxis={valueFormatterPattern ["PRV", "HR", "RR", "O2", "E.A.", "ASI", "PAI"] }
              //chartDescription={{ text: "Sample Chart" }}
              marker={{
                enabled: false,
                digits: 2,
                markerColor: processColor('#F0C0FF8C'),
                textColor: processColor('red'),
                textSize: 12,
                textAlign: 'center',
              }}
              legend={{ enabled: false }}
              drawWeb={false}
              webLineWidth={0}
              webLineWidthInner={0.1}
              webAlpha={255}
              webColor={processColor('white')}
              webColorInner={processColor('white')}
              skipWebLineCount={5}
              //onChange={event => console.log(event.nativeEvent)}
              rotationAngle={-180}
              data={
                ($set = {
                  dataSets: [
                    {
                      values: [
                        { value: scores[3].ave, marker: '🏅' },
                        { value: scores[4].ave, marker: '🧠' },
                        { value: scores[1].ave, marker: '🤝' },
                        { value: scores[0].ave, marker: '💓' },
                        { value: scores[2].ave, marker: '👐' },
                      ],
                      config: {
                        color: processColor('#667080'),
                        drawFilled: true,
                        fillColor: processColor('#D9C5C5'),
                        fillAlpha: 100,
                        lineWidth: 20,
                        drawValues: false,
                      },
                    },
                  ],
                })
              }
              xAxis={
                ($set = {
                  valueFormatter: [
                    skillList[0]?.icon,
                    skillList[1]?.icon,
                    skillList[2]?.icon,
                    skillList[3]?.icon,
                    skillList[4]?.icon,
                  ],
                })
              }
              yAxis={
                ($set = {
                  axisMinimum: 0,
                  axisMaximum: 5,
                  centerAxisLabels: true,
                  enabled: false,
                })
              }
            />
          ) : (
            <RadarChart
              style={styles.chart}
              //xAxis={valueFormatterPattern ["PRV", "HR", "RR", "O2", "E.A.", "ASI", "PAI"] }
              //chartDescription={{ text: "Sample Chart" }}
              marker={{
                enabled: true,
                digits: 2,
                markerColor: processColor('#F0C0FF8C'),
                textColor: processColor('red'),
                textSize: 12,
                textAlign: 'center',
              }}
              legend={{ enabled: false }}
              drawWeb={false}
              webLineWidth={1}
              webLineWidthInner={2}
              webAlpha={255}
              webColor={processColor('white')}
              webColorInner={processColor('white')}
              skipWebLineCount={5}
              //onChange={event => console.log(event.nativeEvent)}
              rotationAngle={-180}
              data={
                ($set = {
                  dataSets: [
                    {
                      values: [
                        { value: 0.5 },
                        { value: 0.5 },
                        { value: 0.4 },
                        { value: 0.2 },
                        { value: 0.2 },
                      ],

                      config: {
                        color: processColor('#667080'),
                        drawFilled: true,
                        fillColor: processColor('#D9C5C5'),
                        fillAlpha: 100,
                        lineWidth: 2,
                        drawValues: false,
                      },
                    },
                  ],
                })
              }
              xAxis={
                ($set = {
                  valueFormatter: [
                    skillList[0]?.score,
                    skillList[1]?.score,
                    skillList[2]?.score,
                    skillList[3]?.score,
                    skillList[4]?.score,
                  ],
                })
              }
              yAxis={
                ($set = {
                  axisMinimum: 0,
                  axisMaximum: 0.5,
                  centerAxisLabels: true,
                  enabled: false,
                })
              }
            />
          )}
        </View>
        <View style={styles.labelsContainer}>
          <Text type="caption3" weight="semiBold" style={styles.lsaLabelText}>
            leadership skill areas
          </Text>
          <Text
            type="body1"
            weight="semiBold"
            style={styles.indicatorLabelText}>
            Indicator Levels
          </Text>
        </View>
        <View style={styles.skillsContainer}>
          {skillList.map((item, i) => (
              <TouchableOpacity
                accessibilityRole="button"
                onPress={() => handleSkillSelection(item)}
                style={styles.cardContainer}
                key={item.id}
                disabled={selectedSkill.id === item.id}
                >
                <Text type="body2" weight="bold" style={styles.skillTitleText}>
                  {item.title} {item.icon}
                </Text>
                <View
                  style={[
                    styles.skillLevelContainer,
                    item.scoreLevel === 'Promising Area' &&
                      styles.promisingArea,
                    item.scoreLevel === 'Area of Concern' &&
                      styles.areaOfConcern,
                    item.scoreLevel === 'Area of Continued Development' &&
                      styles.areaOfContinuedDevelopment,
                  ]}>
                  <Text
                    type="caption2"
                    weight="semiBold"
                    style={[
                      styles.skillLevelText,
                      item.scoreLevel === 'Promising Area' &&
                        styles.promisingAreaText,
                      item.scoreLevel === 'Area of Concern' &&
                        styles.areaOfConcernText,
                      item.scoreLevel === 'Area of Continued Development' &&
                        styles.areaOfContinuedDevelopmentText,
                    ]}>
                    {item.scoreLevel}
                  </Text>
                </View>
                {selectedSkill.id === item.id && (
                  <View style={styles.cardContentContainer}>
                    <Text
                      type="caption1"
                      weight="bold"
                      style={styles.aboutIndicatorLabel}>
                      About this Indicator 💪
                    </Text>
                    <Text
                      type="caption1"
                      weight="regular"
                      style={styles.aboutDescText}>
                      {item.description}
                    </Text>
                    <Text
                      type="caption1"
                      weight="bold"
                      style={styles.aboutIndicatorLabel}>
                      {item.scoreLevel === 'Promising Area'
                        ? item.promisingArea.whatScoreMeans
                        : item.scoreLevel === 'Area of Concern'
                        ? item.areaOfConcern.whatScoreMeans
                        : item.scoreLevel === 'Area of Continued Development'
                        ? item.areaOfContinuedDevelopment.whatScoreMeans
                        : null}
                    </Text>
                    <Text
                      type="caption1"
                      weight="regular"
                      style={styles.skillPointsText}>
                      {
                      item.scoreLevel === 'Promising Area'
                      ? item.promisingArea.skillPoints
                      : item.scoreLevel === 'Area of Concern'
                      ? item.areaOfConcern.skillPoints
                      : item.scoreLevel === 'Area of Continued Development'
                      ? item.areaOfContinuedDevelopment.skillPoints
                      : null
                      }
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
          ))}
        </View>
        {/* TODO: Fix handling of this section */}
        <View style={{ height: 200, marginVertical: 50, marginHorizontal: 16 }}>
          <Button
            style={{
              height: 48,
              backgroundColor: '#667080',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            mode="outlined"
            onPress={() =>
              navigation.navigate('Assessment', {
                screen: 'Extended Assessment Wrap Up',
              })
            }>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                lineHeight: 22,
                fontWeight: '400',
                textAlign: 'center',
              }}>
              Finish Building Profile
            </Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default BaselineScore;

BaselineScore.propTypes = {};

BaselineScore.defaultProps = {};
