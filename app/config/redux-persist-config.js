import {createMigrate, migrations, autoMergeLevel2} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import immutableTransform from 'redux-persist-transform-immutable';

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'main',
  storage: AsyncStorage,
  version: 0,
  debug: true,
  stateReconciler: autoMergeLevel2,
  migrate: createMigrate(migrations, {debug: true}),
};

export default persistConfig;
