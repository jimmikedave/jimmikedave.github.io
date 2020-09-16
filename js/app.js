const project = new Projects().projects;

const projectRows = document.getElementsByClassName("project-row");


let projectRowArray = []

for(i=0; i<project.length; i++) {
    if(project[i].liveLink.length > 0) {

        const rowInfo = `
        <div class='project-card'>
            <h1>${project[i].projectName}</h1>
            <h3>Technologies: ${project[i].technologies}</h3> 
            <p>${project[i].description}</p>
            <h4>Links</h4>
            <a href='${project[i].githubLink}' target='_blank'><img src='images/github.svg'></a>
            <a href='${project[i].liveLink[0]}' target='_blank'><img src='images/link.svg'></a>
        </div>`;

        projectRowArray.push(rowInfo)

    } else {

        const rowInfo = `
        <div class='project-card'>
            <h1>${project[i].projectName}</h1>
            <h3>Technologies: ${project[i].technologies}</h3> 
            <p>${project[i].description}</p>
            <h4>Links</h4>
            <a href='${project[i].githubLink}' target='_blank'><img src='images/github.svg'></a>
        </div>`;

        projectRowArray.push(rowInfo)
    }
    
    
    console.log(project[i].liveLink.length)

    
}




projectRows[0].innerHTML = projectRowArray





