import CarForm from "./components/CarForm.jsx";
import Garage from "./components/Garage.jsx";

export default function App(){
  return (
    <>
      <header className="masthead">
        <p className="masthead_jp" lang="ja">ガレージ登録</p>
        <h1>JDM Garage Registry</h1>
        <p className="masthead_lead">
          Registra tu coche japones, consulta el garage de la comunidad y comprueba cuales ya cumplen la regla de los 25 anos.
        </p>
      </header>

      <main className="layout">
        <section className="panel">
          <h2 id="form-title">Registrar coche</h2>
          <CarForm />
        </section>

        <section>
          <Garage />
        </section>
      </main>
    </>
  );
}