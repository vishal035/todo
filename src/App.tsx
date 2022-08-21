import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="conatiner w-screen h-screen bg-primary-white font-sans">
      <section className="relative w-[60%] h-fit py-6 px-4 rounded-md shadow-2xl bg-white mx-auto top-20">
        <header className="w-fit mx-auto">
          <h1 className="text-3xl px-4 flex flex-row items-start text-black border-b-2 border-green-400 font-bold uppercase ">
            Todo App
          </h1>
        </header>
        <main>
          {/* <TodoInput /> */}
          <TodoList />
        </main>
      </section>
    </div>
  );
}

export default App;
