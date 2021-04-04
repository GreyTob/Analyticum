const show = (state) => {
	document.getElementById('filter').style.display = state
	document.getElementById('modal').style.display = state

	const close = document.getElementById('closeModal')
	if (close.onclick) close.addEventListener('click', clickLinks)
		
}

function clickLinks(event) {
	event.preventDefault()
}