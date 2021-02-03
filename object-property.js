const students = [
    {id: 21, naam: 'Omar Sunny'},
    {id: 31, naam: 'Manna'},
    {id: 41, naam: 'Moyuri'},
    {id: 71, naam: 'Deepjol'}
]
const nameArray = students.map(function(element){
    return element.naam;
})
console.log(nameArray);

const idArray = students.filter(function(s){
    return s.id>40;
})
console.log(idArray);

const biggerOne = students.find(function(st){
    return st.id>40;
})
console.log(biggerOne);