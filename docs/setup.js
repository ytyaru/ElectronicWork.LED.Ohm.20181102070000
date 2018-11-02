window.addEventListener('DOMContentLoaded', function() {
	SetupSourceForm();
});
function SetupSourceForm() {
	document.forms.SourceForm.SourceVoltage.focus();
	var v = document.getElementById("SourceVoltage");
	v.addEventListener("change", CalcAllSourceVoltage);
	v.addEventListener("keyup", CalcAllSourceVoltage);
	v.addEventListener("paste", CalcAllSourceVoltage);
	v.addEventListener("input", CalcAllSourceVoltage);
	var n = document.getElementById("SourceNumber");
	n.addEventListener("change", CalcAllSourceVoltage);
	n.addEventListener("keyup", CalcAllSourceVoltage);
	n.addEventListener("paste", CalcAllSourceVoltage);
	n.addEventListener("input", CalcAllSourceVoltage);
	CalcAllSourceVoltage();
}
function CalcAllSourceVoltage() {
	var allSourceVoltage = 
		document.forms.SourceForm.SourceVoltage.value * 
		document.forms.SourceForm.SourceNumber.value;
	var target = document.getElementById("AllSourceVoltage");
	target.value = allSourceVoltage;
}
