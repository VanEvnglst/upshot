import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import LeadershipSkillAreaActions, {
  LeadershipSkillAreaTypes,
} from 'app/store/LSARedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';
import {
  aboutSkillArea,
  basisForLSA,
  lsaScoreDefinition,
} from 'app/models/LeadershipSkillAreaModel';

const STATUS_OK = 'ok';

function randomizeQuestions(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export function* fetchOverviewQuestions() {
  const connected = yield checkInternetConnection();
  // if (!connected) {
  // return
  // }
  const response = yield call(api.getLSAOverviewQuestion);

  if (response.ok) {
    let questions = [];
    questions.push(
      ...response.data.empathy,
      ...response.data.trust_building,
      ...response.data.authenticity,
      ...response.data.achievement,
      ...response.data.openness_to_learn,
    );

    const arr = randomizeQuestions(questions);
    console.log('question', arr);
    yield put(
      LeadershipSkillAreaActions.fetchOverviewQuestionsSuccess(questions),
    );
  } else {
    yield put(
      LeadershipSkillAreaActions.fetchOverviewQuestionsFailure(response.data),
    );
  }
}

export function* fetchExtendedQuestions() {
  const connected = yield checkInternetConnection();
  // if (!connected) {
  // return
  // }
  const response = yield call(api.getLSAExtendedQuestions);
  if (response.ok) {
    const empathyQs = randomizeQuestions(response.data.empathy);
    const trustQs = randomizeQuestions(response.data.trust_building);
    const authenticityQs = randomizeQuestions(response.data.authenticity);
    const achievementQs = randomizeQuestions(response.data.achievement);
    const opennessToLearnQs = randomizeQuestions(
      response.data.openness_to_learn,
    );

    const questions = {
      empathyList: empathyQs,
      authenticityList: authenticityQs,
      trustBuildingList: trustQs,
      achievementList: achievementQs,
      opennessToLearnList: opennessToLearnQs,
    };

    yield put(
      LeadershipSkillAreaActions.fetchExtendedQuestionsSuccess(questions),
    );
  } else {
    yield put(
      LeadershipSkillAreaActions.fetchExtendedQuestionsFailure(response.data),
    );
  }
}

export function* fetchBaselineScores() {
  const connected = yield checkInternetConnection();
  // if (!connected) {
  // return
  // }
  const response = yield call(api.getBaselineScores);

  if (response.ok) {
    let scores = response.data.scores;
    const testCount = state => state.leadershipSkillArea.get('testFinishedCount');
    const completeTest = yield select(testCount);
    
    let completedCount = 0;
    const dataValues = Object.values(scores);
    for (let i = 0; i < dataValues.length; i++) { 
      let category = dataValues[i]['skill'];
      const categoryStepCnt = dataValues[i]['ans_count'];

      switch (category) { 
        case 'trust_building':
          category = 'trustBuilding';
          break;
        case 'achievement':
          category = 'achievementOrientation';
          break;
        case 'openness_to_learn':
          category = 'opennessToLearn';
          break;
      }
      if (categoryStepCnt === 7) { 
        completedCount = completedCount + 1
      }
      yield put(LeadershipSkillAreaActions.setCategoryStatus(category, categoryStepCnt))
    }
    if (completeTest + completedCount <= 5) {
      yield put(LeadershipSkillAreaActions.setAssessmentStatus('testFinishedCount', completeTest + completedCount))
    } else { 
      yield put(LeadershipSkillAreaActions.setAssessmentStatus('testFinishedCount', 5))
    }
    yield put(LeadershipSkillAreaActions.fetchBaselineScoresSuccess(scores));
  } else {
    yield put(
      LeadershipSkillAreaActions.fetchBaselineScoresFailure(response.data),
    );
  }
}

export function* postOverviewTest({ data }) {
  const connected = yield checkInternetConnection();
  const dataValues = Object.values(data);
  let dataArr = [];
  for (let i = 0; i < dataValues.length; i++) {
    const valueObj = Object.values(dataValues)[i];
    let dataObj = {
      q_id: valueObj.question.qid,
      ans: valueObj.option.value,
    };
    dataArr = [...dataArr, dataObj];
  }
  const overviewData = {
    answers: dataArr,
  };

  const response = yield call(api.postOverviewTest, overviewData);
  if (response.ok) {
    if (response.data.status === 'ok') {
      let definitionAuthenticity, skillPointAuthenticity, definitionTrust, skillPointTrust, definitionEmpathy, skillPointEmpathy, definitionOpenness, skillPointOpenness, definitionAchievement, skillPointAchievement;
      let authenticityArr, trustArr, empathyArr, opennessArr, achievementArr = [];
      for (let i = 0; i < response.data.skills.length; i++) { 
       
        switch (response.data.skills[i].name) { 
          case 'authenticity':
            if (response.data.skills[i].area === 'Promising Area') {
              definitionAuthenticity = aboutSkillArea[4].promisingArea.whatScoreMeans;
              skillPointAuthenticity = aboutSkillArea[4].promisingArea.skillPoints;
            } else if (response.data.skills[i].area === 'Area of Continued Development') {
              definitionAuthenticity = aboutSkillArea[4].areaOfContinuedDevelopment.whatScoreMeans;
              skillPointAuthenticity = aboutSkillArea[4].areaOfContinuedDevelopment.skillPoints
            } else if (response.data.skills[i].area === 'Area of Concern') { 
              definitionAuthenticity = aboutSkillArea[4].areaOfConcern.whatScoreMeans
              skillPointAuthenticity = aboutSkillArea[4].areaOfConcern.skillPoints
            } 
            authenticityArr =  response.data.skills[i];
            break;
            case 'trust_building':
              if (response.data.skills[i].area === 'Promising Area') {
                definitionTrust = aboutSkillArea[2].promisingArea.whatScoreMeans;
                skillPointTrust = aboutSkillArea[2].promisingArea.skillPoints;
              } else if (response.data.skills[i].area === 'Area of Continued Development') {
                definitionTrust = aboutSkillArea[2].areaOfContinuedDevelopment.whatScoreMeans;
                skillPointTrust = aboutSkillArea[2].areaOfContinuedDevelopment.skillPoints
              } else if (response.data.skills[i].area === 'Area of Concern') { 
                definitionTrust = aboutSkillArea[2].areaOfConcern.whatScoreMeans
                skillPointTrust = aboutSkillArea[2].areaOfConcern.skillPoints
              } 
              trustArr =  response.data.skills[i];
              break;
          case 'empathy': 
            if (response.data.skills[i].area === 'Promising Area') {
              definitionEmpathy = aboutSkillArea[3].promisingArea.whatScoreMeans;
              skillPointEmpathy = aboutSkillArea[3].promisingArea.skillPoints;
            } else if (response.data.skills[i].area === 'Area of Continued Development') {
              definitionEmpathy = aboutSkillArea[3].areaOfContinuedDevelopment.whatScoreMeans;
              skillPointEmpathy = aboutSkillArea[3].areaOfContinuedDevelopment.skillPoints
            } else if (response.data.skills[i].area === 'Area of Concern') { 
              definitionEmpathy = aboutSkillArea[3].areaOfConcern.whatScoreMeans
              skillPointEmpathy = aboutSkillArea[3].areaOfConcern.skillPoints
            } 
            empathyArr =  response.data.skills[i];
            break;
            case 'openness_to_learn': 
            if (response.data.skills[i].area === 'Promising Area') {
              definitionOpenness = aboutSkillArea[1].promisingArea.whatScoreMeans;
              skillPointOpenness = aboutSkillArea[1].promisingArea.skillPoints;
            } else if (response.data.skills[i].area === 'Area of Continued Development') {
              definitionOpenness = aboutSkillArea[1].areaOfContinuedDevelopment.whatScoreMeans;
              skillPointOpenness = aboutSkillArea[1].areaOfContinuedDevelopment.skillPoints
            } else if (response.data.skills[i].area === 'Area of Concern') { 
              definitionOpenness = aboutSkillArea[1].areaOfConcern.whatScoreMeans
              skillPointOpenness = aboutSkillArea[1].areaOfConcern.skillPoints
            } 
            opennessArr =  response.data.skills[i];
            break;
            case 'achievement': 
            if (response.data.skills[i].area === 'Promising Area') {
              definitionAchievement = aboutSkillArea[0].promisingArea.whatScoreMeans;
              skillPointAchievement = aboutSkillArea[0].promisingArea.skillPoints;
            } else if (response.data.skills[i].area === 'Area of Continued Development') {
              definitionAchievement = aboutSkillArea[0].areaOfContinuedDevelopment.whatScoreMeans;
              skillPointAchievement = aboutSkillArea[0].areaOfContinuedDevelopment.skillPoints
            } else if (response.data.skills[i].area === 'Area of Concern') { 
              definitionAchievement = aboutSkillArea[0].areaOfConcern.whatScoreMeans
              skillPointAchievement = aboutSkillArea[0].areaOfConcern.skillPoints
            } 
            achievementArr =  response.data.skills[i];
            break;
          
        }
      }
      const results = [
        {
          id: 1,
          title: 'Authencity',
          description: aboutSkillArea[4].description,
          definition: definitionAuthenticity,
          skillPoint: skillPointAuthenticity,
          ...authenticityArr,
        },
        {
          id: 2,
          title: 'Trust Building',
          description: aboutSkillArea[2].description,
          definition: definitionTrust,
          skillPoint: skillPointTrust,
          ...trustArr,
        },
        {
          id: 3,
          title: 'Empathy',
          description: aboutSkillArea[3].description,
          definition: definitionEmpathy,
          skillPoint: skillPointEmpathy,
          ...empathyArr,
        },
        {
          id: 4,
          title: 'Openness to Learn',
          description: aboutSkillArea[1].description,
          definition: definitionOpenness,
          skillPoint: skillPointOpenness,
          ...opennessArr,
        },
        {
          id: 5,
          title: 'Achievement',
          description: aboutSkillArea[0].description,
          definition: definitionAchievement,
          skillPoint: skillPointAchievement,
          ...achievementArr,
        },
      ];
      yield put(LeadershipSkillAreaActions.postOverviewTestSuccess(results));
      yield NavigationService.navigate('Assessment End Line');
    } else {
      yield put(
        LeadershipSkillAreaActions.postOverviewTestFailure(response.data),
      );
    }
  } else {
    yield put(
      LeadershipSkillAreaActions.postOverviewTestFailure(response.data),
    );
  }
}

export function* postExtendedTest({ data }) {
  const connected = yield checkInternetConnection();
  const testCount = state => state.leadershipSkillArea.get('testFinishedCount');
  const completeTest = yield select(testCount);
  const checkCategoryStatus = state => state.leadershipSkillArea.get('skillAreaTestSteps');
  const chkCatStatus = yield select(checkCategoryStatus);

  const dataValues = Object.values(data);
  let dataArr = [];
  for (let i = 0; i < dataValues.length; i++) {
    const valueObj = Object.values(dataValues)[i]['data'];
    let dataObj = {
      q_id: valueObj.question.qid,
      ans: valueObj.option.value,
    };
    dataArr = [...dataArr, dataObj];
  }
  const extendedData = {
    answers: dataArr,
  };
  const category = dataValues[1]['data'].category;

  const response = yield call(api.postLSAExtendedAnswers, extendedData);
  if (response.ok) {
    yield put(
      LeadershipSkillAreaActions.postExtendedTestSuccess(response.data.scores),
    );
    yield put(
      LeadershipSkillAreaActions.setAssessmentStatus(
        'testFinishedCount',
        completeTest + 1,
      ),
    );
    yield put(
      LeadershipSkillAreaActions.setCategoryStatus(
        category,
        'completed',
      ),
    );
    yield put(
      LeadershipSkillAreaActions.resetStep(
        'extendedData',
        null,
      ),
    );
    debugger;
    yield put(
      LeadershipSkillAreaActions.setAssessmentStatus('extendedData', null),
    );
    yield NavigationService.navigate('Extended Assessment Confirmation');
  } else {
    yield put(
      LeadershipSkillAreaActions.postExtendedTestFailure(response.data),
    );
  }
}

function* watchLSAOverviewSaga() {
  yield takeLatest(
    LeadershipSkillAreaTypes.FETCH_OVERVIEW_QUESTIONS,
    fetchOverviewQuestions,
  );
  yield takeLatest(
    LeadershipSkillAreaTypes.FETCH_EXTENDED_QUESTIONS,
    fetchExtendedQuestions,
  );
  yield takeLatest(
    LeadershipSkillAreaTypes.FETCH_BASELINE_SCORES,
    fetchBaselineScores,
  );
  yield takeLatest(
    LeadershipSkillAreaTypes.POST_OVERVIEW_TEST,
    postOverviewTest,
  );
  yield takeLatest(
    LeadershipSkillAreaTypes.POST_EXTENDED_TEST,
    postExtendedTest,
  );
}

export default watchLSAOverviewSaga;
