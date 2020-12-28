/*--------------Contact--------------*/
(function(){

    // SHIPPING CONFIRMATION
    var confirmation = document.getElementById('send');

    function shippingConfirmation(){

        var p = document.createElement('p');
        var text = document.createTextNode("Los datos han sido enviados con éxito.");

        p.className = "p-confirmation";

        p.appendChild(text);

        var form = document.getElementsByClassName('form')[0];

        if(form.getElementsByClassName("p-confirmation").length == 0){
            form.appendChild(p);
        }
    };

    confirmation.addEventListener('click', shippingConfirmation);

}())