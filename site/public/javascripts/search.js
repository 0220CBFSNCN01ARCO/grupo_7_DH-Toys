window.addEventListener('load', function (e) {
    let name, txtValue
    const hide = document.querySelector('.hide')
    //let count = 0
    //let hideElements = []
    const productsContainer = document.querySelector('#allProducts')
    const allProducts = productsContainer.querySelectorAll('#singleProduct')
    let input = document.querySelector('#input')
    input.addEventListener('keyup', function (e) {
        let filter = input.value.toUpperCase()
        for (i = 0; i < allProducts.length; i++) {
            name = allProducts[i].getElementsByTagName("h4")[0];
            txtValue = name.textContent || name.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                allProducts[i].style.display = "block";
            } else {
                allProducts[i].style.display = "none";/*
                if(hideElements.indexOf(txtValue) != -1 || !hideElements.length){
                    hideElements.push(txtValue)
                    console.log("Array de elementos ocultos:" + hideElements)
                }*/
            }
        }
    })
})