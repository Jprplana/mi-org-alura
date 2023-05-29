import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="redes">
        <a href="https://www.aluracursos.com/">
          <img src="/img/facebook_logo.png" alt="Facebook" />
        </a>
        <a href="https://www.aluracursos.com/">
          <img src="/img/twitter_logo.png" alt="twitter" />
        </a>
        <a href="https://www.aluracursos.com/">
          <img src="/img/instagram_logo.png" alt="instagram" />
        </a>
      </div>
      <img src="/img/Logo_org.png" alt="org" />
      <strong>Desarrollado por Alura</strong>
    </footer>
  );
};

export default Footer;
