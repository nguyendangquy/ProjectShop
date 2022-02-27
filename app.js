/* function reveal() {
    var reveals = document.querySelector(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal); */

// const tabProduct = document.querySelectorAll('ul.tab-content_nav li a')
// const itemProduct = document.querySelector('.product-item')

// tabProduct.forEach((tab) => {
//   tab.addEventListener('click', (e) => {
//     const type = e.target.getAttribute('type-clothing')

//     document.querySelector('.tab-content_nav li a.active').classList.remove('tab-active')
//     e.target.classList.add('tab-active')

//     itemProduct.forEach((item) => {
//       if(type == 'all' || item.getAttribute('type-clothing') == type) {
//         item.classList.remove('hide')
//       }
//       else {
//         item.classList.add('hide')
//       }
//     })
//   })
// })
  