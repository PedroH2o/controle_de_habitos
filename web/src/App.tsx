import { Habit } from "./components/Habit"

function App() {
  return (
    <div>
      <Habit completed={33}/>
      <Habit completed={2} />
      <Habit completed={823} />
  </div>
  )
}

export default App

// Componente: reaproveitar itens da aplicação
// Propriedade: informação para modificar um componente visual ou comportamentalmente