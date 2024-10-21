import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import "./dsy-style.css";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";

export default function CVOnline () {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
    </section>
  )
}