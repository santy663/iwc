import axios from 'axios';

export default axios.create({
  baseURL: `http://172.24.133.115:8060/api/v1/`
});
