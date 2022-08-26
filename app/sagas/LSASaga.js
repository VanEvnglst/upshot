import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import leadershipSkillAreaActions, {
  leadershipSkillAreaTypes,
} from 'app/store/LSARedux';
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
      leadershipSkillAreaActions.fetchOverviewQuestionsSuccess(questions),
    );
  } else {
    yield put(
      leadershipSkillAreaActions.fetchOverviewQuestionsFailure(response.data),
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

    yield put(leadershipSkillAreaActions.fetchExtendedQuestionsSuccess(questions))
  } else {
    yield put(
      leadershipSkillAreaActions.fetchExtendedQuestionsFailure(response.data),
    );
  }
}

function* watchLSAOverviewSaga() {
  yield takeLatest(
    leadershipSkillAreaTypes.FETCH_OVERVIEW_QUESTIONS,
    fetchOverviewQuestions,
  );
  yield takeLatest(
    leadershipSkillAreaTypes.FETCH_EXTENDED_QUESTIONS,
    fetchExtendedQuestions,
  );
}

export default watchLSAOverviewSaga;
