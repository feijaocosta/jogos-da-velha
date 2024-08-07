document.addEventListener("DOMContentLoaded", function() {
    const projectGallery = document.getElementById('project-gallery');
    
    // Lista de repositórios dos alunos
    const repositories = [
        { name: "Projeto 1", repo: "usuario1/projeto1" },
        { name: "Projeto 2", repo: "usuario2/projeto2" },
        { name: "Projeto 3", repo: "usuario3/projeto3" }
    ];

    repositories.forEach(repo => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <h2>${repo.name}</h2>
            <a href="https://${repo.repo.split('/')[0]}.github.io/${repo.repo.split('/')[1]}" target="_blank">Visitar Página</a>
            <br>
            <a href="https://github.com/${repo.repo}" target="_blank">Ver Repositório</a>
        `;
        projectGallery.appendChild(projectElement);
    });
});
