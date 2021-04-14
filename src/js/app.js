const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

function setDarkMode() {

    let mode = document.body.classList.toggle('dark-mode');
    
    if(mode){
        moon.classList.add('hiden');
        sun.classList.remove('hiden');
    } else {
        sun.classList.add('hiden');
        moon.classList.remove('hiden');
    }
}