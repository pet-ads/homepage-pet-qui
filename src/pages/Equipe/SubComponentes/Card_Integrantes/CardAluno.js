import React, { useState } from "react";
import styles from "./CardAluno.module.css";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const withBlur = { filter: "blur(2px) grayscale(80%) brightness(0.5)" };
const noBlur = { filter: "blur(0px) grayscale(0%)" };

function CardAluno({ nome, srcFoto, tipo, github, linkedin }) {
  const [blurred, setBlur] = useState(noBlur);
  let altFoto = `Foto de ${nome}, integrante do PET QUI do IFSP Sertãozinho`;

  return (
    <div className={styles.card}>
      <div
        className={styles.imgContainer}
        onMouseEnter={() => setBlur(withBlur)}
        onMouseLeave={() => setBlur(noBlur)}
      >
        {
          srcFoto && srcFoto !== "" ? (<img
            style={blurred}
            className={styles.img}
            src={srcFoto}
            alt={altFoto}
          />) : (
            <img
          style={blurred}
          className={styles.img}
          src="images/fotos_alunos/pessoa_sem_foto.png"
          alt={altFoto}
        />
          )
        }
        <img
          style={blurred}
          className={styles.img}
          src={srcFoto}
          alt={altFoto}
        />
        <div className={styles.iconWrapper}>
          {/* <a href={github} target="_blank" rel="noopener noreferrer">
            <span className={styles.githubIcon}>
              <FaGithub />
            </span>
          </a> */}
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <span className={styles.linkedinIcon}>
              <FaLinkedin />
            </span>
          </a>
        </div>
      </div>

      <div className={styles.descricao}>
        <strong>
          <p className={styles.p}>{nome}</p>
        </strong>
        <pre></pre>
        <strong>
          <p className={styles.p}>{tipo}</p>
        </strong>
      </div>
    </div>
  );
}

export default CardAluno;
