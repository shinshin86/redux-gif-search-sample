export const registFavoriteItem = (item) => {
  console.log('*** regist favorite item ***')
  console.log(item)

  // sample
  let favoItem = localStorage.getItem('favoriteItem')
  if(!favoItem) {
    favoItem = {}
  }
  favoItem = JSON.stringify(item)
  localStorage.setItem('favoriteItem', favoItem)
  return true // when failure regist, return error...
}

export const getFavoriteItem = () =>  {
  return JSON.parse(localStorage.getItem('favoriteItem'))
}
