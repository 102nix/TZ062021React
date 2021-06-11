import axios from 'axios'

const SMALLDATAURL = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
const BIGDATAURL = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

export const api = {
  getSmallData () {
    return axios.get(SMALLDATAURL)
  },
  getBigData () {
    return axios.get(BIGDATAURL)
  }
}