// import Reactotron from "reactotron-react-native";

// Reactotron.configure() // controls connection & communication settings
//   .useReactNative() // add all built-in react native plugins
//   .connect(); 


import Reactotron from 'reactotron-react-native'
import apisaucePlugin from 'reactotron-apisauce'
import sagaPlugin from 'reactotron-redux-saga'
import { reactotronRedux } from 'reactotron-redux'
// import AsyncStorage from '@react-native-community/async-storage'


Reactotron.configure({
name: 'MyApp',
// host: '0.0.0.0',
// host: '192.168.1.244',
// host: '172.20.10.9',
})
// .setAsyncStorageHandler(AsyncStorage)
.useReactNative()
.use(reactotronRedux())
.use(apisaucePlugin())
.use(sagaPlugin())
.connect()

Reactotron.clear()

console.tron = Reactotron

export default Reactotron

// import Reactotron from 'reactotron-react-native';
// import { reactotronRedux } from 'reactotron-redux';
// import reactotronSaga from 'reactotron-redux-saga';

// Reactotron
//   .configure({ name: 'ReactNative404' }) // controls connection & communication settings
//   .useReactNative() // add all built-in react native plugins
//   .use(reactotronRedux()) // add redux plugin
//   .use(reactotronSaga()) // add saga plugin
//   .connect(); // let's connect!

// // Clear Reactotron on every time we load the app
// Reactotron.clear();

// console.tron = Reactotron;

// export default Reactotron;




// =========================!!==============================
// import Reactotron from 'reactotron-react-native';
// import { reactotronRedux } from 'reactotron-redux';
// import reactotronSaga from 'reactotron-redux-saga';

// Reactotron
//   .configure({ name: 'ReactNative404' }) // controls connection & communication settings
//   .useReactNative() // add all built-in react native plugins
//   .use(reactotronRedux()) // add redux plugin
//   .use(reactotronSaga()) // add saga plugin
//   .connect(); // let's connect!

// // Clear Reactotron on every time we load the app
// Reactotron.clear();

// console.tron = Reactotron;

// export default Reactotron;




// import Reactotron from 'reactotron-react-native';
// import sagaPlugin from 'reactotron-redux-saga';
// import apisaucePlugin from 'reactotron-apisauce';

// Reactotron.configure({ name: 'GiftCard' })
//   .useReactNative()
//   .use(apisaucePlugin())
//   .use(sagaPlugin());

// Reactotron.connect(); // Connect with reactotron
// Reactotron.clear(); // Clear the logs.

// const sagaMonitor = Reactotron.createSagaMonitor();
// export { sagaMonitor };




// import Reactotron from "reactotron-react-native";

// Reactotron.configure() // controls connection & communication settings
//   .useReactNative() // add all built-in react native plugins
//   .connect(); // let's connect!