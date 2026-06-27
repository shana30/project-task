let appState = {

    workspaceName: "Vetrix Workspace",

    activeInterns: 10,

    generateSummary() {

        return `Workspace: ${this.workspaceName}, Active Interns: ${this.activeInterns}`;

    }

};

console.log(appState.generateSummary());