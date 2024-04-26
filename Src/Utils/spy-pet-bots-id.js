const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://kickthespy.pet/ids');
    return response.data;
  } catch (error) {
    console.error(' Error Fetching Data:', error.message);
    throw error;
  }
}

async function SpyPetBotIDS() {
  try {
    const ids = await fetchData();
    return ids;
  } catch (error) {
    console.error(' Error Fetching And Exporting IDs:', error.message);
    throw error;
  }
}

module.exports = SpyPetBotIDS;
