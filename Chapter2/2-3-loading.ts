{
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(str: ResourceLoadState) {
    switch (str.state) {
      case 'loading':
        console.log('loading...');
        break;
      case 'success':
        console.log(`${str.response.body}`);
        break;
      case 'fail':
        console.log(`${str.reason}`);
        break;
      default:
        throw new Error('unknown state');
    }
  }
  printLoginState({ state: 'loading' });
  printLoginState({ state: 'success', response: { body: 'loaded' } });
  printLoginState({ state: 'fail', reason: 'no network' });
}
