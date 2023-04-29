exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello AWS lambda fom s3-Lambda, how are you?")
  };
  return response;
}