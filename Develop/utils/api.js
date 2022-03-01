const axios = require('axios');

//API call to gather data from github user
//Then pushed to index where it is input into userInfo
const apiCall = {
  async getUser(userInput) {
    try { let response = await axios
        
        .get(`https://api.github.com/users/${userInput.username}`);
        return response.data;

      } catch (error) {
        console.log(error);
      }
  }
};

module.exports = apiCall;