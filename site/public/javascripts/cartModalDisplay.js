window.onload = () => {

    document.querySelector('#sidebar_toggle_btn').addEventListener('click', function(e){
        const cartModal = document.querySelectorAll(".hide")
        cartModal.forEach(element => {
          if (element.style.display === "none") {
            element.style.display = "block";
          } else {
            element.style.display = "none";
          }
        })
    })
    
    document.querySelector(".close-icon-black").addEventListener('click', function(e){
      const cartModal = document.querySelectorAll(".hide")
      cartModal.forEach(element => {
        if (element.style.display === "none") {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      })
    })
}