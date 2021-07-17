/**
 * ajax.js : Asynchronous JavaScript And Xml
 */


function ajaxFnc() {
	let xhtp = new XMLHttpRequest();
	xhtp.open("get", "EmpListServelt");
	xhtp.send();
	xhtp.onreadystatechange = function() {
		if (xhtp.readyState == 4 && xhtp.status == 200) {
			let data = JSON.parse(xhtp.responseText);
			console.log(data);
		}
	}
}

ajaxFnc();