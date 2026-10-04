const projects = [
  {
    title: 'Heart Attack Risk Prediction Project',
    category: 'Machine Learning',
    description:
      'This data-driven project uses R to predict heart attack risk from patient health data. I applied Logistic Regression, K-Nearest Neighbors, and Linear Regression to analyze features like cholesterol, BMI, and exercise habits, then evaluated model performance to uncover early-risk indicators.',
    technologies: ['R', 'Logistic Regression', 'KNN', 'Data Analysis'],
    github: 'https://github.com/TotoroHEM/Heart-Attack-Risk-Prediction-Project'
  }
];

function renderProjects(items) {
  const githubProjects = document.getElementById('github-projects');
  if (!githubProjects) return;

  githubProjects.innerHTML = items
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-card-body">
            <span class="project-badge">${project.category}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags" aria-label="Project technology stack">
              ${project.technologies.map((tech) => `<span>${tech}</span>`).join('')}
            </div>
            <div class="project-links">
              <a href="${project.github}" target="_blank" rel="noopener">View GitHub</a>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

renderProjects(projects);
