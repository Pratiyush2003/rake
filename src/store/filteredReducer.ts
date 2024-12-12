/* eslint-disable @typescript-eslint/no-explicit-any */
export const createFilteredReducer = (reducer: any, allowedActionType: any) => {
    return (state: any, action: any) => {
      if (action.type !== allowedActionType)
        return state;
      return reducer(state, action);
    };
};
