document.addEventListener("DOMContentLoaded", async function() {
    const projectGallery = document.getElementById('project-gallery');
    
    // Lista de repositórios dos alunos
    const repositories = [
        { name: "Projeto 1", repo: "maandioca/Jogodavelha" },
        { name: "Projeto 2", repo: "anaf07/jogodavelha" },
        { name: "Projeto 3", repo: "brxnin/jogodavelha" }
    ];

    for (const repo of repositories) {
        const [username, repoName] = repo.repo.split('/');
        const repoData = await fetch(`https://api.github.com/repos/${repo.repo}`).then(response => response.json());
        const userData = await fetch(repoData.owner.url).then(response => response.json());

        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <img src="${userData.avatar_url}" alt="${username}'s avatar" class="avatar">
            <h2>${repo.name}</h2>
            <p>Profile: ${userData.name || username}</p>
            <a href="https://${username}.github.io/${repoName}" target="_blank">Visitar Página</a>
            <br>
            <a href="https://github.com/${repo.repo}" target="_blank">${repoName}</a>
        `;
        projectGallery.appendChild(projectElement);
    }
});
