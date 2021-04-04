const btnForm = (event) => {
	document.getElementById('showForm').style.display = 'block'
	document.getElementById('btnForm').style.opacity = '1'

	document.getElementById('showRules').style.display = 'none'
	document.getElementById('btnRules').style.opacity = '.47'
}

const btnRules = (event) => {
	document.getElementById('showForm').style.display = 'none'
	document.getElementById('btnForm').style.opacity = '.47'

	document.getElementById('showRules').style.display = 'block'
	document.getElementById('btnRules').style.opacity = '1'
}


document.getElementById('btnForm').addEventListener('click', btnForm) 
document.getElementById('btnRules').addEventListener('click', btnRules) 

