import { ListKontak, AddKontak } from "./components";

function App() {
  return (
    <div style={{ padding: 30 }}>
      <h2>Aplikasi Nama Kontak </h2>
      <hr />
      <AddKontak />
      <hr />
      <ListKontak />
    </div>
  );
}

export default App;
