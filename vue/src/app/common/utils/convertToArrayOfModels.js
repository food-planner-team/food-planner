export default (Model, array) => {
  return array.map(itemData => new Model(itemData))
}
