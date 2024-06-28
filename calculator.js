let result = document.getElementById('result');
    function appendToDisplay(value) {
        result.value += value;
    }
    function clearDisplay() {
        result.value = '';
    }
    function deleteChar() {
        result.value = result.value.slice(0, -1);
    }
    function calculateResult() {
        try {
            result.value = eval(result.value);
        } catch (error) {
            result.value = 'Error';
        }
    }