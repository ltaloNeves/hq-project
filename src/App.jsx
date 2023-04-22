import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
      <input type="text"/>
        <h1>Planet Commics</h1> 
        <button></button>
      </header>

      <main>
        <h2>Destaques</h2>
        <h3>Flash</h3>
        <div className="flash">
          <div>
            <img src="./img/flash/flash1.png" alt="" /> 
             <br />
             Flash: Seguindo em Frente
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>

          <div>
            <img src="./img/flash/flash2.png" alt="" /> 
             <br />
             Flash: Renascer
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>


          <div>
            <img src="./img/flash/flash3.png" alt="" /> 
             <br />
             Flash: O Homem Mais Répido Vivo
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>


          <div>
            <img src="./img/flash/flash4.png" alt="" /> 
             <br />
             Flash: No 221
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>


          <div>
            <img src="./img/flash/flash5.png" alt="" /> 
             <br />
             Flash: Head to Head with Cicada!
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>


          <div>
            <img src="./img/flash/flash6.png" alt="" /> 
             <br />
             Flash: Sozinho Contra os Elementos
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>


          <div>
            <img src="./img/flash/flash7.png" alt="" /> 
             <br />
             Flash Renascer
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>


          <div>
            <img src="./img/flash/flash8.png" alt="" /> 
             <br />
             Flash: Batman do Inferno pt 1
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>


          <div>
            <img src="./img/flash/flash9.png" alt="" /> 
             <br />
             Flash
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>


          <div>
            <img src="./img/flash/flash10.png" alt="" /> 
             <br />
             Flash: O Maior Truque de Todos
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>












          




        </div>

        <h3>Capitão America</h3>
        <div className="cap">

        <div>
            <img src="./img/capitão/cap1.png" alt="" /> 
             <br />
             Capitão America 1
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
          <div>
            <img src="./img/capitão/cap2.png" alt="" /> 
             <br />
             Capitão America 19
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
          <div>
            <img src="./img/capitão/cap3.png" alt="" /> 
             <br />
             Capitão America: 1
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
          <div>
            <img src="./img/capitão/cap4.png" alt="" /> 
             <br />
             Capitão America: All New
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
          <div>
            <img src="./img/capitão/cap5.png" alt="" /> 
             <br />
             Capitão America: Sam Wilson
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
          <div>
            <img src="./img/capitão/cap6.png" alt="" /> 
             <br />
             Capitão America: Sam Wilson
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
          <div>
            <img src="./img/capitão/cap7.png" alt="" /> 
             <br />
             Capitão America: Sam Wilson
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
          <div>
            <img src="./img/capitão/cap8.png" alt="" /> 
             <br />
             Capitão America: 13
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
          <div>
            <img src="./img/capitão/cap9.png" alt="" /> 
             <br />
             Capitão America: Sentinela da Liberdade
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
          


        </div>
        <h2>Marcas</h2> 
        <h3>DC</h3>
        <div className="dc">
          <div>
            <img src="./img/dc/dc.png" alt="" /> 
             <br />
             Batman: Cavaleiro Branco
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
          <div>
            <img src="./img/dc/dc1.png" alt="" /> 
             <br />
             Batman: O Retorno do Cavaleiro das Trevas
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
          <div>
            <img src="./img/dc/dc2.png" alt="" /> 
             <br />
             Liga da Justiça : Novos 52 #1
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
          <div>
            <img src="./img/dc/dc3.png" alt="" /> 
             <br />
             Batman: Harley1s Little Black Book
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
          <div>
            <img src="./img/dc/dc4.png" alt="" /> 
             <br />
             Lex Luthor: Ano de Vilão
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
          <div>
            <img src="./img/dc/dc5.png" alt="" /> 
             <br />
             Universo DC Renascimento
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
          <div>
            <img src="./img/dc/dc6.png" alt="" /> 
             <br />
             Superman: Para o Alto e Avante
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
          <div>
            <img src="./img/dc/dc7.png" alt="" /> 
             <br />
             Liga da Justiça: Unidos Afinal
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
          <div>
            <img src="./img/dc/dc8.png" alt="" /> 
             <br />
             Flash: Todos os Seus Passados Lembrados
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>   
          <div>
            <img src="./img/dc/dc9.png" alt="" /> 
             <br />
             Flash: Quem Lembra do Wally West?
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>

        </div>



        <h3>Marvel</h3>
        <div className="marvel">
          <div>
             <img src="./img/marvel/marvel1.png" alt="" /> 
             <br />
             Homem-Aranha: Poder e responsabilidade
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>

          <div>
             <img src="./img/marvel/marvel2.png" alt="" /> 
             <br />
             Vingadores
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>

          <div>
             <img src="./img/marvel/marvel3.png" alt="" /> 
             <br />
             Capitão America: Até Logo Para uma Lenda Viva
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>

          <div>
             <img src="./img/marvel/marvel4.png" alt="" /> 
             <br />
             Guerras Secretas: Edição Especial
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>

          <div>
             <img src="./img/marvel/marvel5.png" alt="" /> 
             <br />
             Homem-Aranha: Miles Morales
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>

          <div>
             <img src="./img/marvel/marvel6.png" alt="" /> 
             <br />
             Desafio Infinito
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>

          <div>
             <img src="./img/marvel/marvel7.png" alt="" /> 
             <br />
             O Homem-Aranha & Wolverine 
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>

          <div>
             <img src="./img/marvel/marvel8.png" alt="" /> 
             <br />
             X-Men
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>


          <div>
             <img src="./img/marvel/marvel9.png" alt="" /> 
             <br />
             Homem-Aranha: Crise no Campus
             <br /> 
             <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>





        </div>
      </main>
    </div>
  )
}

export default App
