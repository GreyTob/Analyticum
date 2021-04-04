const validate = () => {
	const LENGTH = 2
	const name = document.getElementById('modalName')
	const tel = document.getElementById('modalTel')
	const email = document.getElementById('modalEmail')
	const question = document.getElementById('modalQuestion')



	//проверка имени
	if(name.value.length <= LENGTH || !isNaN(name.value)) {
		name.style.border = '2px solid red'
	} else name.style.border = 'none'

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
		
	//проверка вопроса
	if(!question.value) {
		question.style.border = '2px solid red'
		return false
	} else question.style.border = 'none'


}

