const validateForm = () => {
	const LENGTH = 2
	const name = document.getElementById('nameForm')
	const surname = document.getElementById('surnameForm')
	const gender = document.getElementById('gender')
	const tel = document.getElementById('telForm')
	const email = document.getElementById('emailForm')


	//проверка имени
	if(name.value.length <= LENGTH || !isNaN(name.value)) {
		name.style.border = '2px solid red'
	} else name.style.border = 'none'

	//проверка фамилии
	if(surname.value.length <= LENGTH || !isNaN(surname.value)) {
		surname.style.border = '2px solid red'
	} else surname.style.border = 'none'

	//проверка пола
	if(gender.value === 'unknow') {
		gender.style.border = '2px solid red'
	} else gender.style.border = 'none'

	//проверка телефона
	function checkTel(tetephone) {
		const reg = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/
		return tetephone.match(reg)
	}

	const userTel = tel.value

	if(!checkTel(userTel)) {
		tel.style.border = '2px solid red'
	} else tel.style.border = 'none'

	

	//проверка e-mail
	function checkEmail(mail) {
		const reg = /^[a-z0-9_][a-z0-9\._-]*[a-z0-9_]*@([a-z0-9]+[a-z0-9_-]*[a-z0-9]+\.)+[a-z0-9]+$/i
		return mail.match(reg)
	}

	const userEMail = email.value

	if (!checkEmail(userEMail)) {
		email.style.border = '2px solid red'
	} else email.style.border = 'none'

	//отменяет отправку!
	return false
		
}
