import { FETCH_WEATHER } from '../actions/index'

export default function(state=[], action) {
  console.log('Action: ', action);

  // In Redux, we don't want to mutate the state, we return an entirely new array
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data])
      return [ action.payload.data, ...state ];
  }

  return state;
}
