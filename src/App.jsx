import Counter from "./components/Counter";
import CounterButtons from "./components/CounterButtons";

function App() {
  return (
    <div className="min-h-screen flex flex-col gap-2 items-center justify-center">
      <Counter />
      <CounterButtons />
    </div>
  );
}

export default App;
