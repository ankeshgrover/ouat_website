function toggleAccordianFun(id){
    const button = document.getElementById(id);
    // button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      // If it was previously collapsed, expand this one
      closeAccordianFun()
      if (!expanded) {
        button.setAttribute('aria-expanded', 'true');
      }
    // });
  }

  function closeAccordianFun(){
    const accordionButtons = document.querySelectorAll('.accordion button');
      // Collapse all accordions first
      accordionButtons.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
  }