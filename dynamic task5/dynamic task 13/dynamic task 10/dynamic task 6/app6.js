let internTasks = [
    "Setup Environment",
    "Learn Variables",
    "Write Functions"
];

internTasks.push("Build Portfolio");
internTasks.unshift("Fix Critical Bug");

console.log(internTasks);
console.log("Before Removal:");
console.log(internTasks);

let firstRemoved = internTasks.shift();

let lastRemoved = internTasks.pop();

console.log("Removed First Task:", firstRemoved);
console.log("Removed Last Task:", lastRemoved);

console.log("Remaining Tasks:");
console.log(internTasks);