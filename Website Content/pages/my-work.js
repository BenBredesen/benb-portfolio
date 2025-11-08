function loadProjectButtons() {
    const projectTypes = ['python','godot','assets']
    for (const project of projectTypes) {
        console.log(project)
        document.getElementById(project).addEventListener("click", () => {
            window.location.href = project+".html";
            return;
        });
    }
}

loadProjectButtons();