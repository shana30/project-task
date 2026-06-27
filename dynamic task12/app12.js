let workspaceRegistry = [
    "Setup Environment",
    "Learn Variables",
    "Write Functions",
    "Login Screen",
    "Dashboard UI"
];

for (let i = 0; i < workspaceRegistry.length; i++) {

    if (workspaceRegistry[i].includes("Learn")) {
        continue;
    }

    if (workspaceRegistry[i] === "Dashboard UI") {
        console.log("Found target!");
        break;
    }

    console.log(workspaceRegistry[i]);
}