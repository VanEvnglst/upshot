import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import LeadershipSkillAreaActions, {
  LeadershipSkillAreaTypes,
} from 'app/store/LSARedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';

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
    const opennessToLearnQs = randomizeQuestions(response.data.openness_to_learn)

    const questions = {
      empathyList: empathyQs,
      authenticityList: authenticityQs,
      trustBuildingList: trustQs,
      achievementList: achievementQs,
      opennessToLearnList: opennessToLearnQs
    }

    yield put(LeadershipSkillAreaActions.fetchExtendedQuestionsSuccess(questions))
  } else {
    yield put(
      LeadershipSkillAreaActions.fetchExtendedQuestionsFailure(response.data),
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
      ans: valueObj.option.value
     }
     dataArr = [...dataArr, dataObj];
  }
  const overviewData = {
    answers: dataArr
  };
  
  const response = yield call(api.postOverviewTest, overviewData);
  if (response.ok) {
    debugger;
    if (response.data.status === 'ok') {
      const results = {
        areasOfImprovement: response.data['Areas_of_Improvement'],
        areasOfContinuedDev: response.data['Satisfactory'],
        promisingAreas: response.data['Promising_Areas']
      }
      yield put(LeadershipSkillAreaActions.postOverviewTestSuccess(results))
      yield NavigationService.navigate('Assessment End Line');
    } else {
      yield put(LeadershipSkillAreaActions.postOverviewTestFailure(response.data));
    }
  } else {
    yield put(LeadershipSkillAreaActions.postOverviewTestFailure(response.data));
  }
}

export function* postExtendedTest({ data }) { 
  const connected = yield checkInternetConnection();

  const extendedData = {
    q_id: data
  }

  const response = yield call(api.postLSAExtendedAnswers, extendedData);
  debugger;
  if (response.ok) {
    debugger;
    yield put(LeadershipSkillAreaActions.postExtendedTestSuccess(extendedData));
  }
  else { 
    yield put(LeadershipSkillAreaActions.postExtendedTestFailure(response.data));
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
    LeadershipSkillAreaTypes.POST_OVERVIEW_TEST, postOverviewTest
  );
  yield takeLatest(
    LeadershipSkillAreaTypes.POST_EXTENDED_TEST,
    postExtendedTest,
  );
}

export default watchLSAOverviewSaga;
