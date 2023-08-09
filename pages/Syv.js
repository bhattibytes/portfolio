import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Syv from '../components/Syv.js';
import Footer from '../components/Footer';

const SyvPage = () => {
  return (
  <>
    <ResponsiveAppBar />
    <a href="https://syv-theta.vercel.app/" target="_blank">
      <p style={{ marginTop: "100px", textAlign: "center", fontSize: "50px" }}>
        Secure Your Vote (SYV)
      </p>
    </a>
    <p style={{ textAlign: "center", fontSize: "36px" }}>
      Online Voting & Election Information Application
    </p>
    <Syv />
    <br />
    <Footer />
  </>
  )
}

export default SyvPage;