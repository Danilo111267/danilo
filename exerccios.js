function ex1(cores) {
  const itens = document.querySelectorAll("#lista li");
  
  
  cores.map((cor, i) => {
    if (itens[i]) {
      itens[i].style.backgroundColor = cor;
    }
  });
}
const cores = ["lightblue", "lightgreen", "lightcoral", "khaki"];
ex1(cores);
//_______________________________________________________

function ex2() {
  const lista = document.createElement("ul")
  const seq = unfold(2)
  seq.map(v => {
    const li = document.createElement("li")
    li.textContent = v
    lista.appendChild(li)
  })
  document.body.appendChild(lista)
}

function unfold(semente) {
  let seq = []
  let valor = semente
  while (valor <= 1024) {
    seq.push(valor)
    valor *= 2
  }
  return seq
}

//_______________________________________________________
function ex3() {
  const lista = document.createElement("ul")
  const seq = unfold(1)
  const pares = seq.filter(v => v % 2 === 0)
  pares.forEach(v => {
    const li = document.createElement("li")
    li.textContent = v
    lista.appendChild(li)
  })
  document.body.appendChild(lista)
}

//_______________________________________________________

function ex4() {
  const divs = document.querySelectorAll("div")
  const texto = Array.from(divs).reduce((acc, div) => acc + div.textContent, "")
  return texto
}

//_______________________________________________________

function ex5() {
  const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 6 },
    { nome: "Carla", nota: 9 }
  ]
  const aprovados = alunos.filter(a => a.nota >= 7)
  const lista = document.createElement("ul")
  aprovados.map(a => {
    const li = document.createElement("li")
    li.textContent = a.nome
    lista.appendChild(li)
  })
  document.body.appendChild(lista)
}

//_______________________________________________________

function ex6() {
  const produtos = [
    { nome: "Teclado", preco: 100, quantidade: 10 },
    { nome: "Mouse", preco: 50, quantidade: 3 },
    { nome: "Monitor", preco: 800, quantidade: 7 }
  ]
  const filtrados = produtos.filter(p => p.quantidade > 5)
  const total = filtrados.reduce((acc, p) => acc + (p.preco * p.quantidade), 0)
  const p = document.createElement("p")
  p.textContent = "Valor total do estoque: R$ " + total
  document.body.appendChild(p)
}
