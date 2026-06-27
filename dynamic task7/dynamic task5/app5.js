let internTasks = [
    "Setup Environment",
    "Learn Variables",
    "Write Functions"
];

console.log(internTasks);

internTasks.push("Build Portfolio");

console.log(internTasks);

internTasks.unshift("Fix Critical Bug");

console.log(internTasks);

console.log("Total Tasks:", internTasks.length);

console.log("3rd Task:", internTasks[2]);
