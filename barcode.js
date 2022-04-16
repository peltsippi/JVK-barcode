//	  setInterval(lookForChange, 100);
//	  var oldVal = //document.getElementById("income").value;

document.getElementById('doit').addEventListener('click', CreateBarcode);


function CreateBarcode()
{
	document.getElementById("barcode").textContent = " 8329319329852352";
}


//document.addEventListener('DOMContentLoaded', calculateTotal);
//document.getElementById('settings').addEventListener('click', function() {
//  if (chrome.runtime.openOptionsPage) {
//    chrome.runtime.openOptionsPage();
//  } else {
//    window.open(chrome.runtime.getURL('options.html'));
//  }
//});
  
	  function lookForChange()
{
		var newVal = document.getElementById("income").value;
		if (newVal != oldVal) {
        oldVal = newVal;
        calculateTotal();     // do whatever you need to do
		}
}
  function calculateTotal()
  
  
{
  
  let rate= 0.0125;
  let maxtotal = 45;
  
  let rate_percent = rate * 100;
  
  document.getElementById("rate_field").value = rate_percent;  
  
  let total = document.getElementById("income").value * rate;
  
  total = Math.round((total) * 100) / 100;
  
  if (total > maxtotal) {total = maxtotal};
 
  document.getElementById("total_value").textContent = total + " €";
  
}	  