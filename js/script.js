document.querySelectorAll('#img-wrapper img.top').forEach((n, i, a) => {
  n.addEventListener('click', () => a.forEach(m => {
		if(m.classList.contains('transparent')){
			m.classList.remove('transparent', m===n);
		} else{
			m.classList.toggle('transparent', m===n);
		}
	}));
});

document.querySelector("#header__content-btn").onclick = function(){
	event.preventDefault();
  alert("Оставить заявку могут только авторизованные пользователи!");
}




