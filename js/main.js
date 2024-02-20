window.addEventListener('DOMContentLoaded', () => {

    const pages = document.querySelectorAll('.page'),
          navPages = document.querySelectorAll('.navItem')
        // novelty = document.querySelector('.novelty'),
        // map = document.querySelector('map'),
        // contacts = document.querySelector('contacts'),
        // assortment = document.querySelector('assortment'),
        // advantages = document.querySelector('advantages');
    
    function hideContent () {
       
        pages.forEach(item => {
            item.style.display = 'none';
        })
       
        navPages.forEach(item => {
            
            item.classList.remove('active')
        })
    }

    function showPage (i=0) {
        pages[i].style.display = "block";
        navPages[i].classlist.add('active');
    }

    hideContent();
})