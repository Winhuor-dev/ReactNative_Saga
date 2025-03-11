import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import { rootSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export default store;


// import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import Reactotron from '../../../Config';
// import rootReducer from '../reducers';
// import {rootSaga} from '../sagas';

// const sagaMonitor = Reactotron.createSagaMonitor();
// const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

// const store = createStore(
//   rootReducer,
//   compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer())
// );

// sagaMiddleware.run(rootSaga);

// export type RootState = ReturnType<typeof rootReducer>;
// export default store;






// import { createStore, compose, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// // import { sagaMonitor } from '../../Config/ReactotronConfig';
// import reducers from '../reducers'; // Our Reducers
// import {rootSaga}from '../sagas'; // Our Sagas

// const middleWare = [];

// // Setup Redux-Saga
// const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
// middleWare.push(sagaMiddleware);

// const store = createStore(reducers, {}, compose(applyMiddleware(...middleWare)));

// // Initiate the root saga.
// sagaMiddleware.run(rootSaga);

// export default store;