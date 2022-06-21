import {GenerateBoard} from "./App.js"

describe('GenerateBoard', () => {
  it('should render without crashing', () => {
    const el = GenerateBoard();
    expect(el instanceof HTMLElement).toBe(true);
  });
});
