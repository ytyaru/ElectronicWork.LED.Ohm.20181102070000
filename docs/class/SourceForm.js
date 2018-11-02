//export default class SourceForm {
//export default class {
export class SourceForm {
	constructor() {
		this.form = null;
	}
	Setup() {
		document.forms.SourceForm.SourceVoltage.focus();
		var v = document.getElementById("SourceVoltage");
		v.addEventListener("change", this.CalcAllSourceVoltage);
		v.addEventListener("keyup", this.CalcAllSourceVoltage);
		v.addEventListener("paste", this.CalcAllSourceVoltage);
		v.addEventListener("input", this.CalcAllSourceVoltage);
		var n = document.getElementById("SourceNumber");
		n.addEventListener("change", this.CalcAllSourceVoltage);
		n.addEventListener("keyup", this.CalcAllSourceVoltage);
		n.addEventListener("paste", this.CalcAllSourceVoltage);
		n.addEventListener("input", this.CalcAllSourceVoltage);
		CalcAllSourceVoltage();
	}
	CalcAllSourceVoltage() {
		var allSourceVoltage = 
			document.forms.SourceForm.SourceVoltage.value * 
			document.forms.SourceForm.SourceNumber.value;
		var target = document.getElementById("AllSourceVoltage");
		target.value = allSourceVoltage;
	}
};
