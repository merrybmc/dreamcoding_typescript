type SuccessState = {
  result: 'success';
  response: {
    body: string;
  };
};

type FailState = {
  result: 'fail';
  reason: string;
};

type LoginState = SuccessState | FailState;

// const login = (): LoginState => {
//   return {
//     result:'success',
//     respon
//   };
// };

function printLoginState(state: LoginState) {
  if (state.result === 'success') {
    console.log(`${state.response.body}`);
  } else {
    console.log(`${state.reason}`);
  }
}
