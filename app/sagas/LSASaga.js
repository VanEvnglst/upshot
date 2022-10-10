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
      const results = [
        {
          id: 1,
          title: 'Authenticity',
          description: aboutSkillArea[0].description,
          definition:
            response.data.skills[2].area === 'Promising Area'
              ? aboutSkillArea[0].promisingArea.whatScoreMeans
              : response.data.skills[2].area === 'Area of Continued Development'
              ? aboutSkillArea[0].areaOfContinuedDevelopment.whatScoreMeans
              : response.data.skills[2].area === 'Area of Concern'
              ? aboutSkillArea[0].areaOfConcern.whatScoreMeans
              : '',
          skillPoint:
            response.data.skills[2] === 'Promising Area'
              ? aboutSkillArea[0].promisingArea.skillPoints
              : response.data.skills[2].area === 'Area of Continued Development'
              ? aboutSkillArea[0].areaOfContinuedDevelopment.skillPoints
              : response.data.skills[2].area === 'Area of Concern'
              ? aboutSkillArea[0].areaOfConcern.skillPoints
              : '',
          ...response.data.skills[2],
        },
        
        {
          id: 2,
          title: 'Trust Building',
          description: aboutSkillArea[1].description,
          definition:
            response.data.skills[1].area === 'Promising Area'
              ? aboutSkillArea[1].promisingArea.whatScoreMeans
              : response.data.skills[1].area === 'Area of Continued Development'
              ? aboutSkillArea[1].areaOfContinuedDevelopment.whatScoreMeans
              : response.data.skills[1].area === 'Area of Concern'
              ? aboutSkillArea[1].areaOfConcern.whatScoreMeans
              : '',
          skillPoint:
            response.data.skills[1] === 'Promising Area'
              ? aboutSkillArea[1].promisingArea.skillPoints
              : response.data.skills[1].area === 'Area of Continued Development'
              ? aboutSkillArea[1].areaOfContinuedDevelopment.skillPoints
              : response.data.skills[1].area === 'Area of Concern'
              ? aboutSkillArea[1].areaOfConcern.skillPoints
              : '',
          ...response.data.skills[1],
        },

        {
          id: 3,
          title: 'Empathy',
          description: aboutSkillArea[2].description,
          definition:
            response.data.skills[0].area === 'Promising Area'
              ? aboutSkillArea[2].promisingArea.whatScoreMeans
              : response.data.skills[0].area === 'Area of Continued Development'
              ? aboutSkillArea[2].areaOfContinuedDevelopment.whatScoreMeans
              : response.data.skills[0].area === 'Area of Concern'
              ? aboutSkillArea[2].areaOfConcern.whatScoreMeans
              : '',
          skillPoint:
            response.data.skills[0] === 'Promising Area'
              ? aboutSkillArea[2].promisingArea.skillPoints
              : response.data.skills[0].area === 'Area of Continued Development'
              ? aboutSkillArea[2].areaOfContinuedDevelopment.skillPoints
              : response.data.skills[0].area === 'Area of Concern'
              ? aboutSkillArea[2].areaOfConcern.skillPoints
              : '',

          ...response.data.skills[0],
        },

        {
          id: 4,
          title: 'Openness to Learn',
          description: aboutSkillArea[3].description,
          definition:
            response.data.skills[4].area === 'Promising Area'
              ? aboutSkillArea[3].promisingArea.whatScoreMeans
              : response.data.skills[4].area === 'Area of Continued Development'
              ? aboutSkillArea[3].areaOfContinuedDevelopment.whatScoreMeans
              : response.data.skills[4].area === 'Area of Concern'
              ? aboutSkillArea[3].areaOfConcern.whatScoreMeans
              : '',
          skillPoint:
            response.data.skills[4].area === 'Promising Area'
              ? aboutSkillArea[3].promisingArea.skillPoints
              : response.data.skills[4].area === 'Area of Continued Development'
              ? aboutSkillArea[3].areaOfContinuedDevelopment.skillPoints
              : response.data.skills[4].area === 'Area of Concern'
              ? aboutSkillArea[3].areaOfConcern.skillPoints
              : '',
          ...response.data.skills[4],
        },

        {
          id: 5,
          title: 'Achievement Orientation',
          description: aboutSkillArea[4].description,
          definition:
            response.data.skills[3].area === 'Promising Area'
              ? aboutSkillArea[4].promisingArea.whatScoreMeans
              : response.data.skills[3].area === 'Area of Continued Development'
              ? aboutSkillArea[4].areaOfContinuedDevelopment.whatScoreMeans
              : response.data.skills[3].area === 'Area of Concern'
              ? aboutSkillArea[4].areaOfConcern.whatScoreMeans
              : '',
          skillPoint:
            response.data.skills[3].area === 'Promising Area'
              ? aboutSkillArea[4].promisingArea.skillPoints
              : response.data.skills[4].area === 'Area of Continued Development'
              ? aboutSkillArea[4].areaOfContinuedDevelopment.skillPoints
              : response.data.skills[3].area === 'Area of Concern'
              ? aboutSkillArea[4].areaOfConcern.skillPoints
              : '',
          ...response.data.skills[3],
        },
      ];
      debugger;
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
