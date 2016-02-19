import {FluxStore} from 'flux';
import dispatcher from '../dispatcher';

// class AppStore extends FluxStore {
//  	constructor() {
//      super('AppStore');
//    }
//     __onDispatch(action) {
//       switch(action.type) {
//         case constants.CHAIN_LOGIN:
//           console.log('CHAIN_LOGIN', action.data);
//           break;
//         case constants.CHAIN_RANDOMKEY:
//           console.log('CHAIN_RANDOMKEY', action.data);
//           break;
//         case constants.CHAIN_TRANSFER:
//           console.log('CHAIN_TRANSFER', action.data);
//           break;
//         case constants.CHAIN_AUTH:
//           console.log('CHAIN_AUTH', action.data);
//           break;
//         case constants.CHAIN_REFRESH:
//           console.log('CHAIN_REFRESH', action.data);
//           break;
// 
//         default:
//           console.log('NO_OP', action.data);
//       }
//     } 
// }
// 
// var appStore = new AppStore(dispatcher);
// export default appStore;