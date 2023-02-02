{
  // printLoginState(state: LoginState)
  // success -> body
  // fail -> reason

  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function printLoginState(state: LoginState) {
    // in은 좋지 않은 방법
    if ('response' in state) {
      console.log(`suceess${state.response.body}`);
    } else {
      console.log(`fail${state.reason}`);
    }
  }
}
