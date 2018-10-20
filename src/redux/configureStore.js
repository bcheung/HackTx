import Reactotron from 'reactotron-react-native';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga'; 

const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
export default function configureStore(initialState) {
  const store = Reactotron.createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
