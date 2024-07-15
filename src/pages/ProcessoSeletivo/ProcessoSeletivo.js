import "./ProcessoSeletivo.css";
import Cabecalho from "./SubComponentes/Cabecalho/Cabecalho";
import Requisitos from "./SubComponentes/Requisitos/Requisitos";
import Inscricoes from "./SubComponentes/Inscricoes/Inscricoes";
import MenuNavegacao from "../../components/menus/MenuNavegacao/menuNavegacao";

function ProcessoSeletivo() {
  return (
    <>
      <MenuNavegacao />

      <div className="corpo">
        <Cabecalho
          titulo="Processo Seletivo"
          texto="Todos os estudantes regularmente matriculados no curso de Licenciatura em Química do IFSP câmpus São Sertãozinho podem participar dos processos seletivos do PetQuímica. O grupo é composto por até doze bolsistas e até seis voluntários.  Os processos seletivos são regidos por editais publicados periodicamente."
        />

        <section className="corpo_informacoes">
          <Requisitos
            titulo="Requisitos"
            texto="Para se inscrever no processo seletivo, o candidato deverá:"
            item_1="Estar regularmente matriculado no curso de Licenciatura em Química."
            item_2="Possuir disponibilidade para se dedicar 20 horas semanais ao Pet/Química."
            item_3="Apresentar média geral (IRA) igual ou superior a 6,0."
          />

          <Inscricoes
            titulo="Inscrições"
            texto_1="As inscrições devem ser realizadas pelo e-mail"
            email="petquisrt@gmail.com"
            texto_2="Prazo de inscrição:"
            data="11 a 15 de março de 2024"
            estado="encerrado"
            texto_3="Detalhes sobre documentos necessários, critérios, cronograma e outras informações devem ser verificados no edital:"
          />
        </section>
      </div>
    </>
  );
}

export default ProcessoSeletivo;
