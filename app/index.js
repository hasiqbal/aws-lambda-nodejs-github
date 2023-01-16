exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello AWS lambda from my aws-lambda-nodejs-github")
  };
  return response;
}