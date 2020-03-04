const student = [];

const students = [
    { id: 21, name: "omar Sunny"},
    { id: 31, name: "Maaaannnnaa"},
    { id: 41, name: "Moury" },
    { id: 71, name: "Deepjol" },
];

for(let i =0; i < students.length; i++){
    const name = students[i];
    const name2 = student.push(name.name);
}

const names = students.map(s=> s.name);
const ids = students.map(s=> s.id);
const bigger = students.filter(s=> s.id > 40);
const fStu = students.find(s=> s.id > 40);

console.log(student);