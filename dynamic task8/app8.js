let internTasks = [
    "Setup Environment",
    "Learn Variables",
    "Write Functions"
];

internTasks.splice(1, 1, "Completed JavaScript Basics");
console.log("After Splice:");
console.log(internTasks);
let vetrixAppFeatures = [
    "Login Screen",
    "Dashboard UI"
];

let workspaceRegistry =
    internTasks.concat(vetrixAppFeatures);

console.log("Workspace Registry:");
console.log(workspaceRegistry);