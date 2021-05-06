const validate = () => {
  const LENGTH = 2
  const name = document.getElementById('modalName')
  const tel = document.getElementById('modalTel')
  const email = document.getElementById('modalEmail')
  const question = document.getElementById('modalQuestion')

  //проверка имени
  if (name.value.length <= LENGTH || !isNaN(name.value)) {
    name.style.border = '2px solid red'
  } else name.style.border = 'none'

  //проверка телефона
  const userTel = tel.value

  function checkTel(tetephone) {
    const reg = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/
    return tetephone.match(reg)
  }

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

  //проверка вопроса
  if (!question.value) {
    question.style.border = '2px solid red'
    return false
  } else question.style.border = 'none'

  //запрет на отправку (для тестирования)
  return false
}
