const projectsHTML = document.querySelector('.projects');
var allProjects = [
    {
        number: 1,
        title: 'This website',
        secondTitle: 'With help of some JavaScript',
        href: '#'
    },
    {
        number: 2,
        title: 'Active Theory',
        secondTitle: 'Replicating Active Therory website',
        href: 'projects/1-ActiveTheory/index.html'
    },
    {
        number: 3,
        title: 'The Edge (discontinued)',
        secondTitle: 'Idea of a story',
        href: 'projects/2-TheEdge/index.html'
    },
    {
        number: 4,
        title: 'My Portfolio',
        secondTitle: 'Self designed portfolio',
        href: 'projects/3-MyPortfolio/index.html'
    },
    {
        number: 5,
        title: 'Dashboard',
        secondTitle: 'Fully responsive dashboard',
        href: 'projects/4-Dashboard/index.html'
    },
    {
        number: 6,
        title: 'Light Enforcer',
        secondTitle: 'Using GIF transitions',
        href: 'projects/5-LightEnforcer/index.html'
    },
    {
        number: 7,
        title: 'NYC',
        secondTitle: 'Image transitions',
        href: 'projects/6-NYC/index.html'
    },
    {
        number: 8,
        title: 'Adidas Run',
        secondTitle: 'Website about adidas',
        href: 'projects/7-AdidasRun/index.html'
    },
    {
        number: 9,
        title: 'Cloud Computing (outdated)',
        secondTitle: 'First website created',
        href: 'projects/8-CloudComputing/index.html'
    },
    {
        number: 10,
        title: 'More coming soon!',
        secondTitle: '',
        href: ''
    }
]

var singleProject = allProjects.map(project => {
    return `<div class="project fx">
        <div class="line"></div>
        <div class="slideInBg"></div>
        <div class="left-side fx">
            <h1 class="number">${project.number}</h1>
            <div class="project-name fx">
                <h1>${project.title}</h1>
                <h2>${project.secondTitle}</h2>
            </div>
        </div>
        <a class="right-side fx" href="${project.href}">
            <div class="arrow"></div>
            <h2 class="view">VIEW PROJECT</h2>
        </a>
    </div>
    `
}).join('');

projectsHTML.innerHTML = singleProject;