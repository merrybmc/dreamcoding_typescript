// Union Type: OR
// 발생할 수 있는 케이스중에 하나를 담을 수 있는 타입을 만들 때 사용됨
// 활용도가 굉장히 높은 타입이다.

type Direction = 'left' | 'right' | 'top' | 'down';

function move(direction: Direction) {
  console.log(direction);
}

move('left');

type TileSize = 8 | 16 | 32;
const tile: TileSize = 16;

// function: login -> success, fail

type loginState = 'success' | 'fail';

type SuccessState = {
  response: {
    body: string;
  };
};

type FailState = {
  reason: string;
};

type LoginState = SuccessState | FailState;

const login1 = (): LoginState => {
  return {
    response: {
      body: 'logged in!',
    },
  };
};

console.log(login1());

const login2 = (id: string, pw: number): loginState => {
  if (id === 'byeongMin' && pw === 1234) {
    return 'success';
  } else {
    return 'fail';
  }
};

console.log(login2('byeongMin', 1234));
console.log(login2('aaa', 123));

// printLoginState(State: LoginState)
// success -> congratulation
// fail -> reason

const printLoginState = (state: LoginState) => {
  // response라는 key가 state안에 있다면
  if ('response' in state) {
    console.log(state.response.body);
  } else {
    console.log(state.reason);
  }
};
