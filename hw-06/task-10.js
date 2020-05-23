import * as users from './users.js';


const sortByCountFriends = (a, b) => a.countFriends - b.countFriends;

const getNamesSortedByFriendsCount = users => {
    return users.default.map(el => {
        return { name: el.name, countFriends: el.friends.length }
    }).sort(sortByCountFriends).map(el => el.name);
};




const getSortedUniqueSkills = users => {    
    const skills = users.default.map(el => el.skills).flat().sort();    
    return skills.reduce((prev, curr) => {
        if (!prev.find(elem => elem == curr))
        prev.push(curr);
        return prev;
    }, []);
};


console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]