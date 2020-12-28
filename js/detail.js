/*--------------Detail--------------*/
(function(){
    
    // PURCHASE CONFIRMATION
    var confirmation = document.getElementById('buy');

    function purchaseConfirmation(){

        var p = document.createElement('p');
        var text = document.createTextNode("El producto ha sido comprado con éxito.");

        p.className = "p-confirmation";

        p.appendChild(text);

        var buy = document.getElementsByClassName('buy')[0];

        if(buy.getElementsByClassName("p-confirmation").length == 0){
            buy.appendChild(p);
        }
    };

    confirmation.addEventListener('click', purchaseConfirmation);

}())