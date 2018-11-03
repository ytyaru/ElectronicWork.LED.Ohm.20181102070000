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
	CalcLEDState();
}
// LED状態を計算する
function CalcLEDState() {
	var target = document.getElementById("LEDIntensity");
	var LEDIntensity = target.value;
	var states = ["Breakdown", "Deterioration", "NotLighting", "Lighting"];
	var state = null;

	var target = document.getElementById("LEDState");
	// LED素子破壊（最大定格電流超過）
	if (Number(document.forms.LEDForm.LEDMaxForwardIntensityOfCurrentNumber.value) <= LEDIntensity) { target.innerHTML = "LED素子破壊（最大定格電流超過）"; target.style = "color:#FF0000";}
	// LED素子劣化（順電流超過）
	else if (Number(document.forms.LEDForm.LEDForwardIntensityOfCurrentNumber.value) <= LEDIntensity) { target.innerHTML = "LED素子劣化（順電流超過）"; target.style = "color:#FFFF00";}
	// LED点灯せず（電源電圧が順電圧より低い）
	else if (Number(document.forms.SourceForm.AllSourceVoltage.value) <= Number(document.forms.LEDForm.LEDForwardVoltage.value)) { target.innerHTML = "LED点灯せず（電源電圧が順電圧より低い）"; target.style = "color:#444444";}
	else { target.innerHTML = "LED点灯！"; target.style = "color:#00FF00";}
}
