import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/img/fb.png" alt="Facebook"/>
            </a>
          </li>
          <li>
            <a href="twitter.com"target="_blank" rel="noopener noreferrer">
              <img src="/img/tw.png" alt="Twitter"/>
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/img/ig.png" alt="Instagram"/>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/img/logo.png" alt="Logo da Alura"/>
      </section>
      <section>
        <p>
            Desenvolvido por Alura.
        </p>
      </section>
    </footer>
  );
};

export default Rodape;
