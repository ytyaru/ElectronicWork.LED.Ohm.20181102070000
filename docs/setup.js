window.addEventListener('DOMContentLoaded', function() {
	SetupSourceForm();
	SetupRegisterForm();
	SetupLEDForm();
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
// 電源電圧を算出する
function CalcAllSourceVoltage() {
	var allSourceVoltage = 
		document.forms.SourceForm.SourceVoltage.value * 
		document.forms.SourceForm.SourceNumber.value;
	var target = document.getElementById("AllSourceVoltage");
	target.value = allSourceVoltage;
	CalcLEDIntensity();
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
// 抵抗器の抵抗値を算出する
function CalcRegisterValue() {
	var RegisterValue = 
		document.forms.RegisterForm.RegisterOhm.value * 
		( 10 ** document.forms.RegisterForm.RegisterExponential.value );
	var target = document.getElementById("RegisterValue");
	target.value = RegisterValue;
	CalcLEDIntensity();
}
function SetupLEDForm() {
	var v = document.getElementById("LEDForwardVoltage");
	v.addEventListener("change", CalcLEDIntensity);
	v.addEventListener("keyup", CalcLEDIntensity);
	v.addEventListener("paste", CalcLEDIntensity);
	v.addEventListener("input", CalcLEDIntensity);
}
// LED電流を算出する
function CalcLEDIntensity() {
	var LEDIntensity = 
		(document.forms.SourceForm.AllSourceVoltage.value - document.forms.LEDForm.LEDForwardVoltage.value) / 
		document.forms.RegisterForm.RegisterValue.value * 1000;
	var target = document.getElementById("LEDIntensity");
	target.value = LEDIntensity;
}
