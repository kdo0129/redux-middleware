const myLogger = (store) => (next) => (action) => {
	console.log('\t', action);
	console.log('\tPrev: ', store.getState());
	const result = next(action); //action을 다음 미들웨어 또는 미들웨어가 없다면 리듀서에게 전달 하겠다
	console.log('\tNext: ', store.getState());
	return result;
};

export default myLogger;

// function myLogger(store) {
//   return function (next) {
//     return function (action) {
//       //하고 싶은 작업
//     }
//   }
// }
