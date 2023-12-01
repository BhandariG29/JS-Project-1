(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    equal.addEventListener('click', function(e){
        if(screen.value === 'undefined'){
            // console.log("1inside if");
            screen.value = "";
            // console.log("2inside if");
        } else {
            // console.log("1inside else");
            let length = screen.value.length;
            let sub = screen.value.substring(0,(length-9));
            console.log(sub);
            let answer = eval(sub);
            // console.log("moye moye");
            screen.value = answer;
            // console.log("2inside else");
        }
    })

    clear.addEventListener('click',function(e){
        screen.value = '';
    })


})();