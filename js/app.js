const project = new Projects().projects;

const projectRows = document.getElementsByClassName("project-row");


let projectRowArray = []

for(i=0; i<project.length; i++) {
    const rowInfo = `
    <div class='project-card'>
        <h1>${project[i].projectName}</h1>
        <h3>Technologies: ${project[i].technologies}</h3> 
        <p>${project[i].description}</p>
        <a href='${project[i].githubLink}' target='_blank'><img src='images/github.svg'></a>
    </div>`;
    
    projectRowArray.push(rowInfo)
}



projectRows[0].innerHTML = projectRowArray





