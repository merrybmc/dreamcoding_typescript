{
  /*
   * Union Types: OR
   * 타입스크립트에서 활용도가 굉장히 높음
   */

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }

  move('right');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8;

  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  type myID = 'merrybmc';
  type myPassword = 12345678;

  function printLoginState(id: string, password: number): LoginState {
    let ID: myID;
    ID = 'merrybmc';
    let PASSWORD: myPassword;
    PASSWORD = 12345678;

    if (id === ID || PASSWORD === password) {
      return {
        response: {
          body: 'login Success',
        },
      };
    } else {
      return {
        reason: 'login fail',
      };
    }
  }

  console.log(printLoginState('aaa', 123));
  console.log(printLoginState('merrybmc', 12345678));
}
