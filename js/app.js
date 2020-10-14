$(document).ready(function() {
    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function(event) {
        event.preventDefault();
        $('body,html').animate({
            // How far away from the top is the hash
            scrollTop: $(this.hash).offset().top
        }, 1000)
    })

})


/* Display projects */

// Call the Projects() class
const project = new Projects().projects;

// Creates a display card for each project in the Projects() Class
for(i=0; i<project.length; i++) {

    // Filters through each project and creates a display based on if the project
    // contains a live link.
    if(project[i].liveLink.length > 0) {

        // Targets the div container the cards will be displayed in.
        const projectRow = document.getElementById('project-row');

        // The display card elements are created.
        const projectCardDiv = document.createElement('div');
        const projectTitle = document.createElement('h1');
        const projectTech = document.createElement('h3');
        const projectDescription = document.createElement('p');
        const linkHeader = document.createElement('h4');
        const gitHubLink = document.createElement('a');
        const liveLink = document.createElement('a');      
        const gitHubSvg = document.createElement('img');
        const liveLinkSvg = document.createElement('img');  

        // Display card receives the class name 'project-card'.
        projectCardDiv.className = 'project-card';

        // Each card receives the appropriate information for each project.
        projectTitle.textContent = project[i].projectName;
        projectTech.textContent = `Technologies: ${project[i].technologies}`;
        projectDescription.textContent = project[i].description;
        linkHeader.textContent = 'GitHub and Live Link';
        gitHubLink.href = project[i].githubLink;
        gitHubLink.target = '_blank';
        gitHubSvg.src = 'images/github.svg';
        liveLink.href = project[i].liveLink[0];
        liveLink.target = '_blank';
        liveLinkSvg.src = 'images/link.svg';

        // Clickable images are added to the link elements.
        gitHubLink.appendChild(gitHubSvg);
        liveLink.appendChild(liveLinkSvg);

        // The project elements are added to each display card. 
        projectCardDiv.appendChild(projectTitle);
        projectCardDiv.appendChild(projectTech);
        projectCardDiv.appendChild(projectDescription);
        projectCardDiv.appendChild(linkHeader);
        projectCardDiv.appendChild(gitHubLink);
        projectCardDiv.appendChild(liveLink);

        // The display card is added to the project container.
        projectRow.appendChild(projectCardDiv);

    } else {

        // Targets the div container the cards will be displayed in.
        const projectRow = document.getElementById('project-row');

        // The display card elements are created.
        const projectCardDiv = document.createElement('div');
        const projectTitle = document.createElement('h1');
        const projectTech = document.createElement('h3');
        const projectDescription = document.createElement('p');
        const linkHeader = document.createElement('h4');
        const gitHubLink = document.createElement('a');    
        const gitHubSvg = document.createElement('img');
  
        // Display card receives the class name 'project-card'.
        projectCardDiv.className = 'project-card';

        // Each card receives the appropriate information for each project.
        projectTitle.textContent = project[i].projectName;
        projectTech.textContent = `Technologies: ${project[i].technologies}`;
        projectDescription.textContent = project[i].description;
        linkHeader.textContent = 'GitHub Link';
        gitHubLink.href = project[i].githubLink;
        gitHubLink.target = '_blank';
        gitHubSvg.src = 'images/github.svg';
        
        // Clickable image is added to the link element.
        gitHubLink.appendChild(gitHubSvg);
        
        // The project elements are added to each display card. 
        projectCardDiv.appendChild(projectTitle);
        projectCardDiv.appendChild(projectTech);
        projectCardDiv.appendChild(projectDescription);
        projectCardDiv.appendChild(linkHeader);
        projectCardDiv.appendChild(gitHubLink);
       
        // The display card is added to the project container.
        projectRow.appendChild(projectCardDiv);
    }    
}
