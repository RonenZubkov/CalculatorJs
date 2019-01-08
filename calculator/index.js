$( document ).ready(function() {

    let $gOperator;
    let $num1;
    let $num2;

    $('.buttons').click(function () {

        let $numButton = $(this).val();
        let $total;

        if ($numButton >= '0' && $numButton <= '9') {
            if (!$num1) {
                $num1 = $numButton;
                updateDisplay($num1);
            } else if($num1 && !$gOperator) {
                $num1 += $numButton;
                updateDisplay($num1)
            }

            if ($num1 && $gOperator)
                if (!$num2){
                    $num2 = $numButton;
                    updateDisplay($num2)
                } else {
                    $num2 += $numButton;
                    updateDisplay($num2);
                }
            }

        else{
            if (!$gOperator && $numButton !== "=" && $numButton !=="c"){
                $gOperator = $numButton;
            } else if ($numButton === "c"){
                $num1 = 0;
                $num2 = 0;
                $total = 0;
                updateDisplay($total);
            } else{
                switch($gOperator){
                    case '+':
                        $total = +$num1 + +$num2;
                        updateDisplay($total);
                        break;
                    case '-':
                        $total = +$num1 - +$num2;
                        updateDisplay($total);
                        break;
                    case '*':
                        $total = +$num1 * +$num2;
                        updateDisplay($total);
                        break;
                    case '/':
                        $total = +$num1 / +$num2;
                        updateDisplay($total);
                        break;
                }
            }
        }
    });

    function updateDisplay(input){
        $('.calculator-screen').html(input);
    }

});