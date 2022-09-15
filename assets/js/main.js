/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close');
/*===== MENU SHOW =====*/
/* Validate if constant exists */
let isShowMenu = false;
if(navToggle){
        navToggle.addEventListener('click',()=>{
            if(!isShowMenu){
                navMenu.classList.add('show_menu');
                isShowMenu=true
                navToggle.innerHTML='<i class="uil uil-times nav_close"></i>';
            }else{
                navMenu.classList.remove('show_menu');
                isShowMenu=false;
                navToggle.innerHTML='<i class="uil uil-apps nav_open"></i>';

            }
        })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show_menu');
    isShowMenu=false;
    navToggle.innerHTML='<i class="uil uil-apps nav_open"></i>';
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 