document.addEventListener('DOMContentLoaded', function (Event) {
  // добавление скрипта модального окна 'обратный звонок'
  const navHandler = document.createElement('script')
  navHandler.src = 'js/navHandler.js'
  document.body.append(navHandler)

  // добавление скрипта модального окна 'обратный звонок'
  const modal = document.createElement('script')
  modal.src = 'js/modal.js'
  document.body.append(modal)

  // добавление скрипта валидации модальног окна
  const validateModal = document.createElement('script')
  validateModal.src = 'js/validateModal.js'
  document.body.append(validateModal)

  // добавление скрипта валидации модальног формы
  const validateForm = document.createElement('script')
  validateForm.src = 'js/validateForm.js'
  document.body.append(validateForm)

  // добавление скрипта события кнопок 'личные данные' / 'правила участия'
  const formOrRules = document.createElement('script')
  formOrRules.src = 'js/formOrRules.js'
  document.body.append(formOrRules)

  // добавление скрипта простенького предпоказа загружаемого фото
  const previewPhotoLoader = document.createElement('script')
  previewPhotoLoader.src = 'js/previewPhotoLoader.js'
  document.body.append(previewPhotoLoader)
})
