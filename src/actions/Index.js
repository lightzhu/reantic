import axios from 'axios'
import global from '../global'
const apiHost = global.apiHost

export const plus = nums => ({
  type: 'PLUS',
  num1: nums[0],
  num2: nums[1]
})
export const minus = nums => ({
  type: 'MINUS',
  num1: nums[0],
  num2: nums[1]
})
export const multiply = nums => ({
  type: 'MULTIPLY',
  num1: nums[0],
  num2: nums[1]
})
export const divide = nums => ({
  type: 'DIVIDE',
  num1: nums[0],
  num2: nums[1]
})
export const getWeatherInfo = city => {
  return dispatch => {
    axios
      .get(`${apiHost}/get_weatherInfo?city=${city}`)
      .then(function(response) {
        dispatch({
          type: 'GET_WEATHER',
          data: response.data
        })
      })
      .catch(function(error) {
        console.log(error)
      })
      .finally(function() {})
  }
}
export const getNewsInfo = type => {
  return dispatch => {
    axios
      .get(`${apiHost}/get_news?type=${type}`)
      .then(function(response) {
        dispatch({
          type: 'GET_NEWS',
          data: response.data
        })
      })
      .catch(function(error) {
        console.log(error)
      })
      .finally(function() {})
  }
}