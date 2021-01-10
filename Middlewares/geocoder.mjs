import NodeGeocoder from 'node-geocoder'
 
const options = {
  provider: 'mapquest',
 
  // Optional depending on the providers
//   fetch: 'https',
  apiKey: 'YpsonyN0lymOS2NTo2Zepjlgqu7YNQRN', // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};

 
const geocoder = NodeGeocoder(options);

export default geocoder;

// // Using callback
// const res = await geocoder.geocode('29 champs elysée paris');

// console.log(res)