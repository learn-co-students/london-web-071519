export const getHogImagePath = hogName => {
  const fileName = hogName.toLowerCase().replace(/ /g, '_')
  return require(`../hog-imgs/${fileName}.jpg`)
}
