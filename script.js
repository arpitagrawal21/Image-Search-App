const search = ()=>{
    const searchitem = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = storeitems.getElementsByTagName("h2");

    for(let i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName("h2")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML;

            if(textvalue.toUpperCase().indexOf(searchitem) > -1){
                product[i].style.display = "block";
            }else{
                product[i].style.display = "none";
            }
        }
    }
};