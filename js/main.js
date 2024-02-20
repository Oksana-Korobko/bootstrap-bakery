window.addEventListener('DOMContentLoaded', () => {

    const pages = document.querySelectorAll('.page'),
          navPages = document.querySelectorAll('.navItem'),
          parentPage = document.querySelector('.parentPage')
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
        navPages[i].classList.add("active");
    }
    console.log(parentPage)
    parentPage.addEventListener('click', (e) => {
        console.log(e)
        if(e.target && e.target.classList.contains('navItem')){
            
            navPages.forEach((item, i) => {
                if (item == e.target) {
                    hideContent();
                    showPage(i);
                }
            })
        }
    })

    
})