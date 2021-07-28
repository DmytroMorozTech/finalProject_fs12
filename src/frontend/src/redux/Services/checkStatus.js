const checkStatus = async (response) => {
  if (response.ok) {
    return response
  }
  // console.log("RESPONSE:");
  let fullResponse = await response.json()
  // console.log(fullResponse);

  // convert non-2xx HTTP responses into errors:
  const error = new Error(response.statusText)
  error.response = fullResponse
  return Promise.reject(error)
}

export default checkStatus