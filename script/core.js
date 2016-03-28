/**
 * Created by TommyChen on 10/26/2015.
 */


/*
var func = function(item){

    if (item%2 == 0)
        return true;
    else
        return false;

}

function map(arr, somefunction) {
    var result = [];
    if (typeof somefunction == "function") {
            {
                    for (var i = 0; i <= arr.length - 1; i++) {
                    if (isNaN(arr[i])) {
                        return "array should contain only numbers"
                    }
                        else

                    result.push(somefunction(arr[i]));
                }
                return result;
            }
        }
    else
     return 'given argument is not a function';

}*/



    function pop(){
    $('[data-toggle=popover]').popover();
    $('[data-toggle=popover]').on('shown.bs.popover',function(){
        $('.popover').css('top',parseInt($('.popover').css('top'))+50+'px');

    })

}
