function convertCtoF(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function convertFtoC(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  document.getElementById('convertCtoF').addEventListener('click', function() {
    var celsiusInput = document.getElementById('celsius');
    var celsiusValue = parseFloat(celsiusInput.value);
    var result = convertCtoF(celsiusValue);
    document.getElementById('fahrenheit').value = result.toFixed(2);
  });
  
  document.getElementById('convertFtoC').addEventListener('click', function() {
    var fahrenheitInput = document.getElementById('fahrenheit');
    var fahrenheitValue = parseFloat(fahrenheitInput.value);
    var result = convertFtoC(fahrenheitValue);
    document.getElementById('celsius').value = result.toFixed(2);
  });
  