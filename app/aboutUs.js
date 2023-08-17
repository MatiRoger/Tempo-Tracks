const section = document.querySelector('.member-card-section');
const members = [
  {
    name:'Matias Roger Narcotti',
    pic:'../assets/Mati.png',
    description:'28 años, estudio profesorado de Inglés y tengo mucho interés en el desarrollo Backend',
    gitHub:'https://github.com/MatiRoger',
    linkedIn:'https://www.linkedin.com/in/matias-roger-narcotti-dev/'
  },
  {
    name:'Santiago Serodino',
    pic:'../assets/Santi.png',
    description:'18 años, futuro programador e Ing. En Sistemas (y también alumno destacado)',
    gitHub:'https://github.com/santi0dino',
    linkedIn:'https://www.linkedin.com/in/santiago-serodino-731a0427a'
  },
  {
    name:'Gonzalo Cainzo',
    pic:'../assets/Gonza.png',
    description:'30 años, comerciante, estudiante de programación e Inglés. Me gusta entrenar y los deportes.',
    gitHub:'https://github.com/cainzogonzalo',
    linkedIn:'https://www.linkedin.com/in/gonzalo-cainzo-a0ab4814b/'
  }
];

members.forEach(member => {
  const card = document.createElement('div');
	card.classList.add('member-card',  'col-11','col-md-6', 'col-lg-3');
	card.innerHTML = `<div class="member-card-content container row w-100 p-0 m-0">
	<div class="member-picture col-4" style="background-image:url(${member.pic});"></div>
		<div class="member-info col-8">
			<h4>${member.name}</h4>
			<p>${member.description}</p>
			<div class="container-fluid row justify-content-evenly w-100 mt-1">
				<a class="admin-option aside-buttons text-center" target="_blank" href="${member.gitHub}">            
					<i class="bi bi-github"></i>
				</a>
				<a class="admin-option aside-buttons text-center" target="_blank" href="${member.linkedIn}">            
					<i class="bi bi-linkedin"></i>
				</a>
			</div>
		</div>
	</div>`
	section.appendChild(card);
});
