//XMLHttpRequest 


document.addEventListener('click', (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase()

  if (tag === 'a') {
    e.preventDefault()
    carregaPagina(el)
  }
})


async function carregaPagina(elemento) {
  const href = elemento.getAttribute('href')
  const response = await fetch(href)
  
  if(!response.ok) throw new Error('Não carregou')
  
  const html = await response.text()
  carregaResultado(html)
  
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = response
}

// fetch('pagina2.html')
//   .then((response) => {
//     if (response.status !== 200) throw new Error('NOOOOOOSSA DEU MERDA')
//     return response.text()
//   })
//   .then(html => {

//   })
//   .catch(e => { console.error(e) })