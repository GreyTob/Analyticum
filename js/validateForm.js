const validateForm = () => {
  const LENGTH = 2
  const name = document.getElementById('nameForm')
  const surname = document.getElementById('surnameForm')
  const gender = document.getElementById('gender')
  const tel = document.getElementById('telForm')
  const email = document.getElementById('emailForm')

  //проверка имени
  if (name.value.length < LENGTH || !isNaN(name.value)) {
    name.style.border = '2px solid red'
  } else name.style.border = 'none'

  //проверка фамилии
  if (surname.value.length <= LENGTH || !isNaN(surname.value)) {
    surname.style.border = '2px solid red'
  } else surname.style.border = 'none'

  //проверка пола
  if (gender.value === 'unknow') {
    gender.style.border = '2px solid red'
  } else gender.style.border = 'none'

  //проверка телефона
  function checkTel(tetephone) {
    const reg = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/
    return tetephone.match(reg)
  }

  const userTel = tel.value

  if (!checkTel(userTel)) {
    tel.style.border = '2px solid red'
  } else tel.style.border = 'none'

  //проверка e-mail
  const userEMail = email.value

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  if (!validateEmail(userEMail)) {
    email.style.border = '2px solid red'
  } else email.style.border = 'none'

  //запрет на отправку (для тестирования)
  return false
}
