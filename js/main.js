window.addEventListener('DOMContentLoaded', () => {

    const pages = document.querySelectorAll('.page'),
          navPages = document.querySelectorAll('.menuItem ')
        // novelty = document.querySelector('.novelty'),
        // map = document.querySelector('map'),
        // contacts = document.querySelector('contacts'),
        // assortment = document.querySelector('assortment'),
        // advantages = document.querySelector('advantages');
    
    function hideContent () {
        pages.forEach(item, ()=> {
            item.style.display = 'none';
        })
        navPages.forEach(item, () => {
            item.classlist.remove('active')
        })
    }

    function showPage (i) {
        pages[i].style.display = "block";
        navPages[i].classlist.add('active')
    }
})