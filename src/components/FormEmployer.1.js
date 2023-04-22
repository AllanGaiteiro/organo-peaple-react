import { ButtonSubmit } from "./ButtonSubmit";
import { FormEmployerContainer } from "./FormEmployer";
import { FormFieldInput } from "./FormFieldInput";

export function FormEmployer(setSignSelected) {
  return (
    <FormEmployerContainer>
      <p>Preencha os dados para criar o card do colaborador.</p>
      <FormFieldInput
        name="Nome"
        placeholder="Digite o nome do empregado"
        type="text"
      ></FormFieldInput>
      <FormFieldInput
        name="Cargo"
        placeholder="Digite seu cargo na empresa atual."
        type="text"
      ></FormFieldInput>
      <FormFieldInput
        name="Imagen"
        placeholder="Adcione o Link da Imagem"
        type="text"
      ></FormFieldInput>

      <ButtonSubmit
        type="submit"
        onClick={() => setSignSelected(false)}
        value="Criar card"
      />
    </FormEmployerContainer>
  );
}