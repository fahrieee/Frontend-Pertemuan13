// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

/**
 * Membuat Component Main.
 * Menampung Hero dan Movies
 */
function Home() {
  /**
   * Ini hanya snippet(potongan) code.
   * Kode yang lainnya tetap sama.
   */

  /**
   * Mengangkat stave movies: lifting state.
   * Dari Component Movies ke Component Home.
   * Agar bisa digunakan oleh Component yang lain.
   */


  return (
    <>
      <Hero />
      {/* Mengirim props: state movies */}
      <Movies title="Latest Movies"/>
    </>
  );

}

export default Home;