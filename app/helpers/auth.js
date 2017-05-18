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

export function checkIfAuthed (store) {
  // Ignore Firebase
  return store.getState().isAuthed
}

export function logout () {
  console.log('logged out')
}