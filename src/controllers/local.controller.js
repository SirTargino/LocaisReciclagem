import { Sequelize } from "sequelize";
import { validaCep } from "../api/validacaocep.js";
import { sequelize as database } from "../database/connection.js";
import { LocalEntity } from "../entities/local.entity.js";
import { ERRORS, SUCESS } from "../shared/messages.js";

export const createLocal = async (req, res) => {
    try {
        const { local_name, informacoes, cep } = req.body;

        database.sync();

        //Validar se local_name é vazio

        if (!local_name) {
            return res.status(400).json({ message: `Erro: o nome do local ${ERRORS.VALOR_VAZIO}` });
        };

        //validar o cep
        const cepValidado = await validaCep(cep);

        if (cepValidado.error) {
            return res.status(400).json({ message: `Erro: ${ERRORS.CEP_INVALIDO}` });
        };

        const cidade = cepValidado.localidade;
        const rua = cepValidado.logradouro;

        const newLocal = await LocalEntity.create({
            local_name,
            informacoes,
            cep,
            rua,
            cidade
        });

        res.status(201).json({ message: `Local ${SUCESS.CRIADO}.`, newLocal });
    } catch (error) {
        res.json({ message: error });
    }
}

export const getAllLocals = async (req, res) => {
    try {
        const allLocals = await LocalEntity.findAll();
        res.status(201).json({ allLocals });
    } catch (error) {
        res.json({ message: error });
    }
}

export const getLocalByCity = async (req, res) => {
    try {
        const { cidade } = req.body;

        //Verifica se o usuário inseriu algo no body

        if (!cidade) {
            return res.status(400).json({ message: `Erro: O valor cidade ${ERRORS.VALOR_VAZIO}` });
        };

        const locals = await LocalEntity.findAll({
            where: {
                cidade
            }
        });

        if (!locals) {
            return res.status(400).json({ message: `Erro: ${ERRORS.NENHUM_VALOR}` });
        };

        res.status(201).json({ locals });
    } catch (error) {
        res.json({ message: error });
    }
}

export const editLocalByID = async (req, res) => {
    try {
        const { id } = req.params;
        const { newlocal_name, newinformacoes ,newcep } = req.body;

        //Verifica se o ID é vazio:

        if (!id) {
            return res.status(400).json({ message: `Erro: O ID ${ERRORS.VALOR_VAZIO}` });
        };

        //validar o cep
        const cepValidado = await validaCep(newcep);

        if (cepValidado.error) {
            return res.status(400).json({ message: `Erro: ${ERRORS.CEP_INVALIDO}` });
        };

        const newcidade = cepValidado.localidade;
        const newrua = cepValidado.logradouro;

        await LocalEntity.update({ local_name: newlocal_name,informacoes: newinformacoes, cep: newcep, rua: newrua, cidade: newcidade}, {
            where: {
                id
            }
        });

        const updatedLocal = await LocalEntity.findByPk(id);

        res.status(201).json({ message: `Local ${SUCESS.ATUALIZADO}`, updatedLocal });
    } catch (error) {
        res.json({ message: error });
    }
}

export const deleteLocalByID = async (req, res) => {
    try {
        const { id } = req.params;

        //Verifica se o ID é vazio:

        if (!id) {
            return res.status(400).json({ message: `Erro: O ID ${ERRORS.VALOR_VAZIO}` });
        };

        await LocalEntity.destroy({
            where: {
                id
            }
        });

        res.status(201).json({ message: `Local ${SUCESS.EXCLUIDO}` });
    } catch (error) {
        res.json({ message: error });
    }
}