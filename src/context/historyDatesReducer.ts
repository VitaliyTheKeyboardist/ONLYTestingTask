import { IHistoricalDates } from "../types/slices/historicalDates"

export type ActionTypes =
  | { type: "currentChoiceIncrement" }
  | { type: "currentChoiceDecrement" }
  | { type: "setCurrentChoice"; payload: number }
  | { type: "setPreviousChoice"; payload: number }
  | { type: "setRotateValue"; payload: number }

export function historyDatesReducer(
  state: IHistoricalDates,
  action: ActionTypes
): IHistoricalDates {
  switch (action.type) {
    case "currentChoiceIncrement":
      if (state.currentChoice < state.numberOfItems)
        return {
          ...state,
          currentChoice: state.currentChoice + 1,
          rotateValue: state.rotateValue - state.rotateRatio,
        }
      else return { ...state }

    case "currentChoiceDecrement":
      if (state.currentChoice > 1)
        return {
          ...state,
          currentChoice: state.currentChoice - 1,
          rotateValue: state.rotateValue + state.rotateRatio,
        }
      else return { ...state }
    case "setCurrentChoice":
      return {
        ...state,
        currentChoice: action.payload,
      }
    case "setPreviousChoice":
      return {
        ...state,
        currentChoice: action.payload,
      }
    case "setRotateValue":
      return {
        ...state,
        rotateValue: state.baseRotateValue - action.payload,
      }
  }
}
