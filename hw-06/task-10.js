import users from './users.js';


const sort = (a, b) => a.localeCompare(b, 'en');


// const getSortedUniqueSkills = users => {    
//     const skills = users.map(el => el.skills).flat().sort(sort);    
//     return skills.reduce((prev, curr) => {
//         if (!prev.find(elem => elem == curr))
//             prev.push(curr);
//         return prev;
//     }, []);
// };

const getSortedUniqueSkills = users => {    
    const skills = users.map(el => el.skills).flat();    
    return [...new Set(skills)].sort(sort);
};


console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]