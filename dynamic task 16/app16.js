let appState = {

    workspaceName: "Vetrix Workspace",

    activeInterns: 5,

    isProduction: false

};

appState.activeInterns = 10;

appState["deploymentTimestamp"] = new Date().toDateString();

console.log(appState);