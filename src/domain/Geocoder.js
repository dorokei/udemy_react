import axios from 'axios';

const GEOCODE_ENDPOINT =
  'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBgi7MzVT0PzMfOI9OxZ7qmxy_Dd-TnLZQ';

export const geocode = place =>
  axios
    .get(GEOCODE_ENDPOINT, { params: { address: place } })
    .then(results => {
      const data = results.data;
      const status = data.status;
      const result = data.results[0];
      if (typeof result === 'undefined') {
        return { status };
      }

      const address = result.formatted_address;
      const location = result.geometry.location;

      return { status, address, location };
    })
    .catch(error => {
      this.setErrorMessage('通信エラーが発生しました');
    });

export default geocode;

