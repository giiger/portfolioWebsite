document.body.addEventListener("pointermove", (e)=>{
    const {currentTarget: el, clientX: x, clientY: y} = e;
    const {top: t, left: l, width: w, height: h} = el.getBoundingClientRect()
    el.style.setProperty("--posX", x-l-w/2);
    el.style.setProperty("--posY", y-t-h/2);
  
  })

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove('show');
        }
    });
  });

  const aboutLogo = document.querySelectorAll("#aboutLogo path");
  const hidden = document.querySelectorAll('.hidden')

  hidden.forEach((el) => observer.observe(el));