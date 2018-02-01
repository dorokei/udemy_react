import Rakuten from '../lib/Rakuten';

const RAKUTEN_APP_ID = '1044271896084229406';

export const searchHotelByLocation = location => {
  const params = {
    applicationId: RAKUTEN_APP_ID,
    datumType: 1,
    latitude: location.lat,
    longitude: location.lng
  };
  return Rakuten.Travel.SimpleHotelSearch(params).then(result => {
    return result.data.hotels.map(hotel => {
      const basicInfo = hotel.hotel[0].hotelBasicInfo;
      return {
        id: basicInfo.hotelNo,
        name: basicInfo.hotelName,
        url: basicInfo.hotelInformationUrl
      };
    });
  });
};
