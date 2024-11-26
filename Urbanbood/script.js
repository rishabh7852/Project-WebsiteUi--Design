window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    const button = document.getElementById("goTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.style.display = "block";  // Show the button
    } else {
      button.style.display = "none";  // Hide the button
    }
  }
  

  function goTopTop() {
    window.scrollTo({top: 60, behavior: 'smooth'});
  }