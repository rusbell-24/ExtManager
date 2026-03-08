import CardContainer from "./components/CardContainer/CardContainer";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import { ExtensionsProvider } from "./context/extensionsContext";

function App() {
  return (
    <ExtensionsProvider>
      <main className="light-gradient min-h-screen flex flex-col items-center dark:dark-gradient">
        <section className="w-[343px] my-6 md:w-[672px] xl:w-[1170px]">
          <Header />
          <Filters />
          <CardContainer />
        </section>
      </main>
    </ExtensionsProvider>
  );
}

export default App;
