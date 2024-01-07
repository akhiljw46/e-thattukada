import classes from './Footer.module.css';
import githubLogo from '../../assets/github_logo.svg';

function Footer() {
  return (
    <footer className={classes.footer}>
      <a
        href="https://github.com/akhiljw46/e-thattukada"
        target="_blank"
        rel="noreferrer"
      >
        <img src={githubLogo} alt="github" />
      </a>
      <p className={classes.text}>
        &#169; 2024{', '}
        <a
          className={classes.link}
          href="https://linktr.ee/akhilaugustin"
          target="_blank"
          rel="noreferrer"
        >
          Akhil Augustin
        </a>
        , with &#9829;
      </p>
    </footer>
  );
}
export default Footer;
