import React, { useState } from "react";
import styles from "./CardExAluno.module.css";
import { FaLinkedin } from "react-icons/fa";

const withBlur = { filter: "blur(2px) grayscale(80%) brightness(0.5)" };
const noBlur = { filter: "blur(0px) grayscale(0%)" };

function CardExTutor({ nome, ano, srcFoto, tipo, linkedin }) {
  const [blurred, setBlur] = useState(noBlur);
  let altFoto = `Foto de ${nome}, integrante do PET ADS do IFSP Sao Carlos`;

  return (
    <div className={styles.card}>
      <div
        className={styles.imgContainer}
        onMouseEnter={() => setBlur(withBlur)}
        onMouseLeave={() => setBlur(noBlur)}
      >
        <img
          style={blurred}
          className={styles.img}
          src={srcFoto}
          alt={altFoto}
        />
        <div className={styles.iconWrapper}>
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
          <p className={styles.p}>
            {tipo}: {ano}
          </p>
        </strong>
        {/* <strong>
          <p className={styles.p}>{tipo}</p>
        </strong>
        <pre></pre> */}
      </div>
    </div>
  );
}

export default CardExTutor;
