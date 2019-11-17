const projects = [
    {
        name: 'Institute for Indian Magicians',
        description: '<i>Architectural Thesis</i>',
        main: 'Magic school BnW.jpg',
        hover: 'Magic school Colour.jpg',
        layout: 'img-top',
        page: ''
    },
    {
        name: 'Dr. A.P.J. Abdul Kalam Memorial',
        description: 'Winning Entry to the built project',
        main: 'APJ bnw.jpg',
        hover: 'APJ color.jpg',
        layout: 'img-top',
        page: 'apj.html'
    },
    {
        name: 'E-Vaahan',
        description: 'Smart transportation system for IITB Campus',
        main: 'E Vaahan BnW.jpg',
        hover: 'E Vaahan.jpg',
        layout: 'img-top',
        page: 'evaahan.html'
    },
    {
        name: 'DTAd',
        description: 'Dysphagia Therapy Assisting Device <i>Winning project Mechaton\'19 Israel</i>',
        main: 'sample.jpg',
        hover: 'sample.jpg',
        layout: 'img-top',
        page: ''
    },
    {
        name: 'Instructional Design',
        description: '<i>Project 2 (mini)</i>',
        main: 'sample.jpg',
        hover: 'sample.jpg',
        layout: 'img-top',
        page: ''
    },
    {
        name: 'Our Canoe',
        description: 'Culture Centre Senegal Africa. <i>Competition Entry</i>',
        main: 'Canoebnw.jpg',
        hover: 'Canoe.jpg',
        layout: 'img-top',
        page: ''
    },
    {
        name: 'Museum of Language London',
        description: '<i>Among top 50 in Internation competition</i>',
        main: 'sample.jpg',
        hover: 'sample.jpg',
        layout: 'img-top',
        page: ''
    },
    {
        name: 'Service Design',
        description: 'IDC placement service & food service in office',
        main: 'sample.jpg',
        hover: 'sample.jpg',
        layout: 'img-top',
        page: ''
    },
    {
        name: 'Footreak',
        description: 'Foot based interactive installation for phoysical fitness',
        main: 'sample.jpg',
        hover: 'sample.jpg',
        layout: 'img-top',
        page: ''
    },
    {
        name: 'Beam On',
        description: 'Educational board game for school children',
        main: 'sample.jpg',
        hover: 'sample.jpg',
        layout: 'img-top',
        page: ''
    },
    {
        name: 'Interior Design',
        description: 'project as a design consultant',
        main: 'sample.jpg',
        hover: 'sample.jpg',
        layout: 'img-top',
        page: ''
    },
    {
        name: 'Oblivian',
        description: 'Smart transportation system for IITB Campus',
        main: 'nuclear bnw.jpg',
        hover: 'nuclear.jpg',
        layout: 'img-down',
        page: 'oblivian.html'
    },
    {
        name: 'DataViz.',
        description: 'GeoViz, datastories, conceptual mapping',
        main: 'sample.jpg',
        hover: 'sample.jpg',
        layout: 'img-top',
        page: ''
    },
    {
        name: 'Note Box',
        description: 'Currency identification tool for visually impaired people',
        main: 'sample.jpg',
        hover: 'sample.jpg',
        layout: 'img-top',
        page: ''
    },
    {
        name: 'Circlization',
        description: 'Cyber-Neuro- Physical Educational game ',
        main: 'sample.jpg',
        hover: 'sample.jpg',
        layout: 'img-top',
        page: ''
    },
    {
        name: 'Voluteer',
        description: '',
        main: 'sample.jpg',
        hover: 'sample.jpg',
        layout: 'img-top',
        page: ''
    },
    {
        name: 'Landscape Design',
        description: 'redesigning urban park',
        main: 'sample.jpg',
        hover: 'sample.jpg',
        layout: 'img-top',
        page: ''
    },
    {
        name: 'Shollarom',
        description: 'Game design for elderly people with dementia <i>Internship & Research</i>',
        main: 'sample.jpg',
        hover: 'sample.jpg',
        layout: 'img-top',
        page: ''
    }
];
const projectColumns=2,projectsLength=projects.length;
function showSectionImg(event){
    document.getElementById("img").src = "banner/"+event.target.getAttribute('data-section-img');
}
function backnormal(event){
    document.getElementById("img").src = "banner/00banner.jpg";
}
function showOverlay(event){
    $('.overlay').removeClass('hide');
}
function hideOverlay(event){
    $('.overlay').addClass('hide');
}
function projectMouseOver(event){
    event.currentTarget.children[0].src = "Icons/"+event.currentTarget.getAttribute('data-img-hover');
}
function projectMouseOut(event){
    var e = event.toElement || event.relatedTarget;
    if (e.parentNode == this || e == this) {
       return;
    }
    event.currentTarget.children[0].src = "Icons/"+event.currentTarget.getAttribute('data-img');
}

$(document).ready(function () {

    let $projectsEl = $('#projects');
    let gridEl=`<div class="row">`;
    
    projects.map(function(project,i){
        if(i%5===0) gridEl+=`</div><div class="row">`;
        gridEl+=`
        <div class="col-md-3 project" data-page="${project.page}"data-img-hover="${project.hover}" data-img="${project.main}">
            <img src="Icons/${project.main}" alt="Lights" style="width:100%">
            <div class="caption">
                <p class="project-name">${project.name}</p>
                <p class="project-desc">${project.description}</p>
            </div>
        </div>`;
    })
    gridEl+="</div>";
    $(gridEl).appendTo($projectsEl);
    $('.project').hover(projectMouseOver,projectMouseOut);
    $('.project').click(function(event){
        const page = event.currentTarget.getAttribute('data-page');
        page && window.open(page,"_self");
    });
});
