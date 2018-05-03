import { createStore } from "redux";

// reducer を定義する
// state の初期値を 0 にしている
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "PLUS_ONE":
      return state + 1;

    case "MINUS_ONE":
      return state - 1;

    // 初期値を設定するためにも必要
    default:
      return state;
  }
};

// createStore を使って store を作る
// その際に reducer を紐づける
const store = createStore(reducer);

// store が変更された際に実行する内容を登録する
store.subscribe(() => {
  // store.getState() で state を取得できる
  console.log(store.getState());
});

// action を dispatch する
store.dispatch({ type: "PLUS_ONE" });
store.dispatch({ type: "PLUS_ONE" });

store.dispatch({ type: "MINUS_ONE" });
store.dispatch({ type: "MINUS_ONE" });

// import React from 'react';
// import { render } from 'react-dom';
// import Hello from './Hello';

// const styles = {
//   fontFamily: 'sans-serif',
//   textAlign: 'center',
// };

// const App = () => (
//   <div style={styles}>
//     <Hello name="CodeSandbox" />
//     <h2>Start editing to see some magic happen {'\u2728'}</h2>
//   </div>
// );

// render(<App />, document.getElementById('root'));
