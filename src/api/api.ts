import type { Felhasznalo } from "../type/type";

export const adatokLekerese = async () => {
  try {
    const valasz = await fetch("http://localhost:3000/felhasznalok");
    const eredemeny: Felhasznalo[] = await valasz.json();
    if (!valasz.ok) {
      throw new Error("Hiba az adatok lekérésekor");
    }

    return eredemeny;
  } catch (error) {
    console.log("Hiba történt" + error.message);
  }
};

export const adatokMentese = async (felhasznalo)=>{
    try {
        const valasz = await fetch("http://localhost:3000/felhasznalok",{
            method:"POST",
            headers:{"Content-type": "application/json"},
            body: JSON.stringify(felhasznalo)
        });
        if(!valasz){
            throw new Error("Hiba a mentés során!")
        }
    } catch (error) {
        console.log("Hiba történt" + error.message)
    }
}
