const getHeaders = () => {
  return {
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
    'content-type': 'application/json',
    'accept': 'application/json'
  }
}

export default getHeaders