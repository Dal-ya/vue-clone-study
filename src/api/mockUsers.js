// https://react.vlpt.us/redux-middleware/05-redux-thunk-with-promise.html
const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const mockUsers = [
  {
    id: 1,
    name: 'Victor Crest',
    age: 26,
    address: 'London',
    followers: 80000,
    likes: 803000,
    photos: 1400,
  },
  // {
  //   id: 2,
  //   name: 'Test User2',
  //   age: 36,
  //   address: 'Seoul',
  //   followers: 90000,
  //   likes: 110000,
  //   photos: 400,
  // },
  // {
  //   id: 3,
  //   name: 'Test User3',
  //   age: 29,
  //   address: 'Tokyo',
  //   followers: 1000,
  //   likes: 500,
  //   photos: 20,
  // },
];

export async function getUsers() {
  await sleep(1000);
  return mockUsers;
}

export async function getUser(id) {
  await sleep(1000);
  return mockUsers.find(user => id === user.id);
}
