window.addEventListener('DOMContentLoaded', function() {
	SetupSourceForm();
	SetupRegisterForm();
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
function SetupRegisterForm() {
	var ro = document.getElementById("RegisterOhm");
	ro.addEventListener("change", CalcRegisterValue);
	ro.addEventListener("keyup", CalcRegisterValue);
	ro.addEventListener("paste", CalcRegisterValue);
	ro.addEventListener("input", CalcRegisterValue);
	var re = document.getElementById("RegisterExponential");
	re.addEventListener("change", CalcRegisterValue);
	re.addEventListener("keyup", CalcRegisterValue);
	re.addEventListener("paste", CalcRegisterValue);
	re.addEventListener("input", CalcRegisterValue);
	CalcRegisterValue();
}
function CalcRegisterValue() {
	var RegisterValue = 
		document.forms.RegisterForm.RegisterOhm.value * 
		( 10 ** document.forms.RegisterForm.RegisterExponential.value );
	var target = document.getElementById("RegisterValue");
	target.value = RegisterValue;
}