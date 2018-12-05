import actionTypes from './actionTypes'
import APIInterface from 'module/data/APIInterface'

const requestConfiguration = () => ({
  type: actionTypes.REQUEST_CONFIGURATION,
})

const requestConfigurationSuccess = (payload) => ({
  type: actionTypes.REQUEST_CONFIGURATION_SUCCESS,
  payload,
})

const requestConfigurationFailure = (error) => ({
  type: actionTypes.REQUEST_CONFIGURATION_FAILURE,
  error,
})

/**
 * async action creator (thunk)
 */
const getTMDBConfiguration = () => (dispatch, _getState) => {
  dispatch(requestConfiguration())

  APIInterface.getTMDBConfiguration()
    .then(data => {
      dispatch(requestConfigurationSuccess(data))
    })
    .catch(error => {
      dispatch(requestConfigurationFailure(error))
    })
}

export default {
  getTMDBConfiguration
}
