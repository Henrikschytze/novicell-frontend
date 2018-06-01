'use strict';

/**
 * @name Novicell Counter
 * @desc A script that inits counter.js with default Novicell settings
 * @author Rigo Nyfjeld (RNY)
 * @example <form data-counter>
 */

var novicell = novicell || {};

novicell.counter = novicell.counter || new function () {
    
    this.init = function () {
        var count = 1;
        var amountButtons = document.querySelectorAll(".amount__button");
        
        if(amountButtons.length) {
            for(var i = 0; i < amountButtons.length; i++){
                amountButtons[i].addEventListener('click', function(e) {
                    var amountInput = this.parentNode.querySelector('.amount__input');
                    if(amountInput!=null){
                        var currentValue = amountInput.value;
                        var newValue = currentValue;
                        if(this.classList.contains("amount__button--minus")){
                            newValue = getNewAmountMinus(currentValue);
                        }else{
                            newValue = getNewAmountPlus(currentValue);
                        }
                        amountInput.value=newValue;
                    }
                });
            }
        }
    };
}();
function getNewAmountPlus(currentValue){
    var newValue = parseInt(currentValue) + 1;
    return newValue;
}
function getNewAmountMinus(currentValue){
    var newValue = parseInt(currentValue) - 1;
    if(newValue < 1){
        newValue = 1;
    }
    return newValue;
}

