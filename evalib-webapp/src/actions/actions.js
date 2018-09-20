import { EVALUATION_CREATE, EVALUATION_UPDATE, EVALUATION_DELETE } from './types';
import {
    EVALUATION_CHOICEQUESTION_ADD, EVALUATION_CHOICEQUESTION_UPDATE,
    EVALUATION_CHOICEQUESTION_DELETE
} from './types';

export const createEvaluation = (name, description) => {
    return { type: EVALUATION_CREATE, name, description }
};

export const updateEvaluation = (id, name, description) => {
    return { type: EVALUATION_UPDATE, id, name, description }
};

export const deleteEvaluation = (id) => {
    return { type: EVALUATION_DELETE, id };
};

export const addChoiceQuestion = (evaluationId, choiceQuestion) => {
    return { type: EVALUATION_CHOICEQUESTION_ADD, evaluationId, choiceQuestion };
};

export const updateChoiceQuestion = (evaluationId, choiceQuestion) => {
    return { type: EVALUATION_CHOICEQUESTION_UPDATE, evaluationId, choiceQuestion };
};

export const deleteChoiceQuestion = (questionId) => {
    return { type: EVALUATION_CHOICEQUESTION_DELETE, questionId };
};