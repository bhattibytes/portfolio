import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Catwalk from '../components/Catwalk.js';
import Footer from '../components/Footer';

const CatwalkPage = () => {
  return (
  <>
    <ResponsiveAppBar />
    <a href="https://github.com/bhattibytes/Catwalk" target="_blank">
      <p style={{ marginTop: "100px", textAlign: "center", fontSize: "50px" }}>
        Catwalk
      </p>
    </a>
    <p style={{ textAlign: "center", fontSize: "36px" }}>
    An Ecommerce Project
    </p>
    <Catwalk />
    <br />
    <Footer />
  </>
  )
}

export default CatwalkPage;