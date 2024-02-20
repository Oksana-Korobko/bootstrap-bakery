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
            item.classList.add('hide');
            item.classList.remove('show', 'fade')
        })
       
        navPages.forEach(item => {
            
            item.classList.remove('active')
        })
    }

    function showPage (i=0) {
        pages[i].classList.add("show", "fade");
        pages[i].classList.remove("hide");
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