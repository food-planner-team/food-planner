export default error => {
  if (error.isJoi) {
    error.message = error.details.map(error => error.message).join()
  }
  return error
}
