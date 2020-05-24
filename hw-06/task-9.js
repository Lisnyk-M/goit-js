import users from './users.js';

const sortByCountFriends = (a, b) => a.countFriends - b.countFriends;

const getNamesSortedByFriendsCount = users => {
  return users.map(el => {
    return { name: el.name, countFriends: el.friends.length }
  }).sort(sortByCountFriends).map(el => el.name);
};

console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]



