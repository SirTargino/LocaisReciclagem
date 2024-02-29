//A API viacep será usada para validação do CEP inserido pelo usuário

export async function validaCep(cep){
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        return data;
    } catch (error) {
        return {error: true}
    }
}