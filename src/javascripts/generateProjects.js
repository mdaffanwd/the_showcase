import { collapseDetails } from "./detailsCollapse.js";

document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Fetch the JSON data from the public folder
    const response = await fetch('/projects.json');
    if (!response.ok) {
      throw new Error('Failed to load projects.json');
    }
    const data = await response.json();
    // console.log(data)
    const { categories, icons } = data

    // Grab the projects section container
    const projectsSection = document.getElementById('projects-section');

    // Loop over each category from the JSON
    categories.forEach(category => {
      // Create the details element and its summary
      const details = document.createElement('details');
      const summary = document.createElement('summary');
      summary.classList.add('project-section-name');
      summary.textContent = category.name;
      details.appendChild(summary);

      // Create the slider container for cards
      const cardsContainer = document.createElement('div');
      cardsContainer.classList.add('cards');

      if (category.projects.length == 0) {

        const card = document.createElement('div');
        card.classList.add('card');

        const h1 = document.createElement('h2')
        h1.textContent = 'Coming soon'
        card.appendChild(h1)
        cardsContainer.appendChild(card)
      }
      // Loop over each project in the category
      category.projects.forEach(project => {
        // Create the card element
        const card = document.createElement('div');
        card.classList.add('card');

        // Create iframe
        const iframeLink = project.iframeLink
        if (iframeLink) {
          const preview = document.createElement('p');
          preview.textContent = 'Preview'
          card.appendChild(preview)
          const iframe = document.createElement('iframe');

          iframe.src = project.iframeLink;
          card.appendChild(iframe)

        }

        // Project title
        const title = document.createElement('h3');
        title.classList.add('project-name');
        title.textContent = project.name;
        card.appendChild(title);

        // Project description
        const description = document.createElement('p');
        description.classList.add('project-about');
        description.textContent = project.description;
        card.appendChild(description);

        const btnsDiv = document.createElement('div');
        btnsDiv.classList.add('btns')

        // Live link button
        const link = document.createElement('a');
        link.classList.add('btn');
        link.href = project.liveUrl;
        link.textContent = 'Live';

        // External link icon
        const icon = document.createElement('img');
        icon.src = icons.tabIcon;
        icon.alt = 'External Link Icon';
        // icon.classList.add('btn-icon');
        link.appendChild(icon);

        if (project.githubUrl) {
          // Githb Code btn
          const githubBtn = document.createElement('a');
          githubBtn.classList.add('btn');
          githubBtn.href = project.githubUrl;
          githubBtn.textContent = 'Source Code';
          // btnsDiv.appendChild(githubBtn)

          // Github icon
          const githubIcon = document.createElement('img');
          githubIcon.src = icons.githubIcon;
          githubIcon.alt = 'Github Icon';
          githubIcon.classList.add('btn-icon');
          githubBtn.appendChild(githubIcon);
          btnsDiv.appendChild(githubBtn)
        }

        // card.appendChild(link);
        btnsDiv.appendChild(link)


        card.appendChild(btnsDiv)
        cardsContainer.appendChild(card);
      });

      details.appendChild(cardsContainer);
      projectsSection.appendChild(details);
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
  }

  // collapse details
  collapseDetails()
});
