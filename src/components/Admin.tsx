import { useEffect, useState } from "react";
import { adatokLekerese, adatokMentese } from "../api/api";
import type { Felhasznalo } from "../type/type";

function AdminList() {
  const [felhasznalo, setFelhasznalo] = useState<Felhasznalo[]>([]);
  const [felhasznaloNev, setFelhasznaloNev] = useState<string>("");
  const [felhasznaloKor, setFelhasznaloKor] = useState<number>();
  const [felhasznaloTipus, setFelhasznaloTipus] = useState();
  const [felhasznaloBerletKezdet, setFelhasznaloBerletKezdet] =
    useState<string>("");
  const [felhasznaloAktiv, setFelhasznaloAktiv] = useState<boolean>();
  useEffect(() => {
    const adatokBetoltese = async () => {
      try {
        const eredemeny: Felhasznalo[] = await adatokLekerese();
        setFelhasznalo(eredemeny);
      } catch (error) {
        console.log("Hiba történt");
      }
    };
    adatokBetoltese();
  }, []);

  //TODO: felhasznalo felvétele
  async function felhasznaloFelvetel(e) {
    e.preventDefault();
    const ujFelhasznalo = {
      name: felhasznaloNev.trim(),
      age: Number(felhasznaloKor),
      tipus: felhasznaloTipus,
      tagsagKezdete: Date.now(),
      aktiv: felhasznaloAktiv,
    };
    try {
      adatokMentese(ujFelhasznalo);
      
    } catch (error) {}
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Név</th>
            <th>Kor</th>
            <th>Bérlet típus</th>
            <th>Tagság kezdete</th>
            <th>Aktív</th>
          </tr>
        </thead>
        <tbody>
          {felhasznalo.map((felhasznalo) => (
            <tr key={felhasznalo.id}>
              <td>{felhasznalo.name}</td>
              <td>{felhasznalo.age}</td>
              <td>{felhasznalo.tipus}</td>
              <td>{felhasznalo.tagsagKezdete}</td>
              <td>{felhasznalo.aktiv ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form action="">
        <label>
          Név:
          <input
            type="text"
            value={felhasznaloNev}
            onChange={(e) => setFelhasznaloNev(e.target.value)}
          />
        </label>
        <br />
        <label>
          Kor:
          <input
            type="text"
            value={felhasznaloKor}
            onChange={(e) => setFelhasznaloKor(Number(e.target.value))}
          />
        </label>
        <br />
        <label>
          Havi bérlet:
          <input
            type="radio"
            id="option1"
            name="choice"
            value={felhasznaloNev}
            onChange={(e) => setFelhasznaloNev(e.target.value)}
          />
        </label>
        <label>
          Negyedéves bérlet:
          <input
            type="radio"
            id="option2"
            name="choice"
            value={felhasznaloNev}
            onChange={(e) => setFelhasznaloNev(e.target.value)}
          />
        </label>
        <label>
          Éves bérlet:
          <input
            type="radio"
            id="option3"
            name="choice"
            value={felhasznaloNev}
            onChange={(e) => setFelhasznaloNev(e.target.value)}
          />
        </label>
        <label>
          <br />
          Tagság kezdete:
          <input
            type="text"
            value={felhasznaloBerletKezdet}
            onChange={(e) => setFelhasznaloBerletKezdet(e.target.value)}
          />
        </label>
        <br />
        <label>
          Aktív:
          <input
            type="checkbox"
            checked={felhasznaloAktiv}
            onChange={(e) => setFelhasznaloAktiv(e.target.checked)}
          />
        </label>
        <br />
        <button type="submit">Felhasználó felvétele</button>
      </form>
    </>
  );
}
export default AdminList;
