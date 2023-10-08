/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== PROJECTS: UPDATE ACTIVE NAV LINK ====================*/ 
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.proj__nav a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.proj__nav a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== PROJ MENU AND LOGO + BACK TO TOP ====================*/
const projNavMenu = document.getElementById('proj-nav'),
projNavToggle = document.getElementById('proj-nav-toggle')
const scrollLogo = document.getElementById('scroll-logo'),
toTop = document.getElementById('to-top')

/*===== SHOW STUFF ON SCROLL =====*/
window.onscroll = function() {
    logoScrollFunction();
    scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    projNavToggle.classList.add('animate-show');
    projNavMenu.classList.add('animate-show');
    
  } else {
    projNavToggle.classList.remove('animate-show');
    projNavMenu.classList.remove('animate-show');
    setTimeout(function () {
        projNavMenu.classList.remove('show')
    }, 300);
  }
}

/*===== PROJ MENU SHOW / HIDE =====*/
if(projNavToggle) {
    projNavToggle.addEventListener('click', () => {
        projNavMenu.classList.toggle('show')
    })
}

/*===== SHOW LOGO AND BACK TO TOP ON SCROLL =====*/

function logoScrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    scrollLogo.classList.add('scroll-show');
    toTop.classList.add('scroll-show');
  } else {
    scrollLogo.classList.remove('scroll-show');
    toTop.classList.remove('scroll-show');
  }
}

if(toTop) {
    toTop.addEventListener('click', () => {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    })
}

/*======== ANIMATE HIGHLIGHTED TEXT ON ENTRY ============*/

function reveal() {
    var highlightedTexts = document.querySelectorAll('.highlight-text')
    console.log(highlightedTexts)
    for (let i = 0; i < highlightedTexts.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = highlightedTexts[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            highlightedTexts[i].classList.add('highlight-text-animate');
          } else {
            highlightedTexts[i].classList.remove('highlight-text-animate');
        }
    }
}

window.addEventListener('scroll', reveal)
reveal()