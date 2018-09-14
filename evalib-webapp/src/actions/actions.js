import { EVALUATION_CREATE, EVALUATION_UPDATE, EVALUATION_DELETE } from './types';

export const createEvaluation = (name, description) => {
    return { type: EVALUATION_CREATE, name, description }
};

export const updateEvaluation = (id, name, description) => {
    return { type: EVALUATION_UPDATE, id, name, description }
}

export const deleteEvaluation = (id) => {
    return { type: EVALUATION_DELETE, id };
};