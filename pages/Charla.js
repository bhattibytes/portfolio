import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Charla from '../components/Charla.js';
import Footer from '../components/Footer';

const CharlaPage = () => {
  return (
  <>
    <ResponsiveAppBar />
    <a href="https://www.f6s.com/company/charla-technologies-inc#about" target="_blank">
      <p style={{ marginTop: "100px", textAlign: "center", fontSize: "50px" }}>
        Charla Technologies, Inc.
      </p>
    </a>
    <p style={{ textAlign: "center", fontSize: "36px" }}>
      A Side Project that became a Tech Company
    </p>
    <Charla />
    <br />
    <Footer />
  </>
  )
}

export default CharlaPage;
