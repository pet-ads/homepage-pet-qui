import "./equipe.css";
import React from "react";
import Collapsible from "react-collapsible";
import FetchEquipe from "../../hooks/fetch/useFetchEquipe";
import Header from "../../components/ui/Header/header";
import CollapsibleOpen from "../../hooks/collapsible/useCollapsibleOpen";
import CollapsibleTrigger from "../../hooks/collapsible/useCollapsibleTrigger";
import CardTutor from "./SubComponentes/Card_Integrantes/CardTutor";
import CardAluno from "./SubComponentes/Card_Integrantes/CardAluno";
import CardExAluno from "./SubComponentes/Card_Integrantes/CardExAlunos";
import CardExTutores from "./SubComponentes/Card_Integrantes/CardExTutores";

export default function Equipe() {
  return (
    <>
      <div className="equipe--corpo">
        <FetchEquipe
          render={({ alunos, tutores, exAlunos, exTutores }) => (
            <>
              <Header texto="Integrantes" />
              <section className="equipe--tutor">
                {tutores.map((tutor) => (
                  <CardTutor
                    key={tutor.id}
                    //github={tutor.github || "https://github.com"}
                    nome={tutor.nomeTutor}
                    tipo={tutor.tipo}
                    srcFoto={tutor.foto}
                    ano={tutor.ano}
                    linkedin={tutor.linkedin || "https://www.linkedin.com"}
                  />
                ))}
              </section>
              <section className="equipe--alunos">
                {alunos.map((aluno) => (
                  <CardAluno
                    key={aluno.id}
                    nome={aluno.nome}
                    srcFoto={aluno.foto}
                    tipo={aluno.tipo}
                    ano={aluno.ano}
                    //github={aluno.github || "https://github.com"}
                    linkedin={aluno.linkedin || "https://www.linkedin.com"}
                  />
                ))}
              </section>
              {(exAlunos.length > 0 || exTutores.length > 0) && (
                <Collapsible
                  classParentString="EquipeCollapsible"
                  trigger={
                    <CollapsibleTrigger text=" Ex-Integrantes" page="Equipe" />
                  }
                  triggerWhenOpen={
                    <CollapsibleOpen text=" Ex-Integrantes" page="Equipe" />
                  }
                >
                  <section className="equipe--tutor">
                    {exTutores.map((exTutor) => (
                      <CardExTutores
                        key={exTutor.id}
                        nome={exTutor.nomeTutor}
                        srcFoto={exTutor.foto}
                        ano={exTutor.ano}
                        tipo={exTutor.tipo}
                      />
                    ))}
                  </section>
                  <section className="equipe--alunos">
                    {exAlunos.map((exAluno) => (
                      <CardExAluno
                        key={exAluno.id}
                        nome={exAluno.nome}
                        srcFoto={exAluno.foto}
                        anos={exAluno.anos}
                        linkedin={exAluno.linkedin || "https://www.linkedin.com"}
                      />
                    ))}
                  </section>
                </Collapsible>
              )}
            </>
          )}
        />
      </div>
    </>
  );
}
