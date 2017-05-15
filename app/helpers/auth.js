export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Harish',
        avatar: 'https://pbs.twimg.com/profile_images/779050739465392129/wcHTde41.jpg',
        uid: 'harish',
      })
    }, 2000)
  })
}