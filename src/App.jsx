import HelloWorld from './components/HelloWorld'
import Aluno  from './components/Aluno'
import Dados from './components/Dados'
import Contador from './components/Contador'
function App() {

  
  return (
    <>
      <HelloWorld/>
      <Aluno nome="Nome Aluno" email="Aluno@gmail.com" />

      <Dados nivel="Admin" nome="Nome do user" senha="admin" />

      <Contador/>
    </>
  )
}

export default App
