export const registFavoriteItem = (item) => {
  console.log('*** regist favorite item ***')
  console.log(item)

  let favoItem = localStorage.getItem('favoriteItem')
  if(!favoItem) {
    favoItem = []
  } else {
    favoItem = JSON.parse(favoItem)
  }
  favoItem.push(item)
  localStorage.setItem('favoriteItem', JSON.stringify(favoItem))
  return true // when failure regist, return error...
}

export const getFavoriteItem = () =>  {
  return JSON.parse(localStorage.getItem('favoriteItem'))
}
