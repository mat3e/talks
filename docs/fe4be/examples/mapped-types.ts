/// 7. \\\

interface State {
  text: string;
  counter: number;
}

const state: Readonly<State> = {
  text: 'hello world',
  counter: 42
};
state.text = 'update';

const stateUpdate1: Partial<State> = {
  counter: 70
};
