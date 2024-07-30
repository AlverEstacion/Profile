
const skillSection = document.querySelector('#SkillandEd');

document.querySelector('nav a[href="#SkillandEd"]').addEventListener('click', () => {
    skillSection.querySelectorAll('.bar span').forEach(bar => {
		bar.style.animation = 'none';
		bar.offsetHeight; // trigger reflow
		bar.style.animation = null;
	});
});


		