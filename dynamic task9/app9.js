let internTasks = [
    "Setup Environment",
    "Completed JavaScript Basics",
    "Write Functions"
];

let vetrixAppFeatures = [
    "Login Screen",
    "Dashboard UI"
];

let workspaceRegistry = internTasks.concat(vetrixAppFeatures);

// indexOf()
console.log("Dashboard UI Index:", workspaceRegistry.indexOf("Dashboard UI"));

// includes()
if (workspaceRegistry.includes("Dashboard UI")) {
    console.log("Feature is queued for development!");
}