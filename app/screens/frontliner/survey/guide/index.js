import React from 'react';
import { View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text, Header, Wrapper } from 'app/components';
import SurveyActions from 'app/store/frontliner/SurveyRedux';
import { getSurveyId } from 'app/store/selectors';
import labels from 'app/locales/en';
import Images from 'app/assets/images';
import styles from './styles';

const SurveyGuide = props => {
  const { navigation, route } = props;
  const dispatch = useDispatch();
  const journeyId = useSelector(state => state.survey.get('journeyId'));
  const surveyId = useSelector(getSurveyId);
  const { survey } = labels.frontliner;

  const handleNavigation = () => {
    if(surveyId)
    navigation.navigate('FrontlinerSurvey');
    else
      dispatch(SurveyActions.postDRSurvey(journeyId));
      
  }
  
  return (
    <Wrapper>
      <Header
        headerLeft={{
          onPress: () => navigation.goBack(),
        }}
      />
      <Text type="h4">{survey.title}</Text>
      <View style={styles.contentContainer}>
        <View style={styles.descriptionContainer}>
          <Text type="body1" style={styles.descriptionText}>
            {survey.descHelp} {survey.descCont} {survey.descLast}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={Images.surveyGuide}
            resizeMode='contain'
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            style={styles.button}
            onPress={() => handleNavigation()}
            mode='contained'
          >{surveyId !== null ? `Continue` : labels.common.start}
          </Button>
        </View>
      </View>
    </Wrapper>
  );
};

export default SurveyGuide;

SurveyGuide.propTypes = {
  getSurveyId: PropTypes.number,
  postDRSurvey: PropTypes.func,
};

SurveyGuide.defaultProps = {
  getSurveyId: 1,
  postDRSurvey: () => {},
};
