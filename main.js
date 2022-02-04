const headerBurger = document.querySelector('.header__burger');
        
      let h1Text = headerBurger.innerHTML
      headerBurger.innerHTML = ''
          
      i = 0 
      
      function text() {
          if (i < h1Text.length) {
            headerBurger.innerHTML += h1Text[i]
            i++
            setTimeout(() => {
                text()
            }, 100);
          }
      }text()