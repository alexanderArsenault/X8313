import * as allActions from './allActions';

export function receiveMatrices(data) {
  return { type: allActions.RECEIVE_MATRICES, matrices: data };
}

export function fetchMatrices() {
  return (dispatch) => {
    fetch('https://api.myjson.com/bins/w34x0')
      .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        }))
      )
      .then(response => {
        if (response.status === 200) {
          dispatch(receiveMatrices(response.data))
          dispatch(setTrack(response.data[0]))
          dispatch(setRace(response.data[0].races[0]))
        } else {
          var flash = {
            type: 'error',
            title: 'Error getting task list',
            content: 'There was an error getting the task list. Please try again.'
          }

          dispatch({ type: "DISPLAY_FLASH", data: flash })
        }
      });
  };
}

export function setTrack(data) {
  return { type: allActions.SET_TRACK, activeTrack: data };
}

export function setRace(data) {
  return { type: allActions.SET_RACE, activeRace: data };
}