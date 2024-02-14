const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


//   accordion

  const accordion = ()=>{
    const items = Array.from(document.querySelectorAll('.menu-item'));

    if (!items.length) return false;


    items.forEach((item)=>{
        const trigger = item.querySelector('.menu-item__header');

        trigger.addEventListener('click', ()=>{
            item.classList.toggle('active');
        });
    });
};

const init1 =()=>{
    accordion();
};

document.addEventListener("DOMContentLoaded", init1);


const modal= ()=>{
  const parent = document.querySelector(".modal");
  if (!parent) return false;
  
  const show = ()=> parent.classList.add('active');
  const close =()=> parent.classList.remove('active');

  const ShowButton = document.querySelector(".js-show-modal");
  ShowButton.addEventListener('click', show);

  const CloseButton = parent.querySelector(".js-close-modal");
  CloseButton.addEventListener('click', close);

  document.addEventListener('keydown', (event)=>{
      if (event.keyCode===27) close();
  })

  parent.addEventListener('click', (event)=>{
      if (event.target===parent)
      {
          close();
      }
  })
}

const init = ()=>
{
  modal();
}

document.addEventListener('DOMContentLoaded', init);