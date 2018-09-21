import { EVALUATION_CREATE, EVALUATION_UPDATE, EVALUATION_DELETE } from './types';
import {
    EVALUATION_QUESTION_ADD, EVALUATION_QUESTION_UPDATE,
    EVALUATION_QUESTION_DELETE
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

export const addQuestion = (question) => {
    return {
        type: EVALUATION_QUESTION_ADD,
        question
    };
};

export const updateQuestion = (question) => {
    return {
        type: EVALUATION_QUESTION_UPDATE,
        question
    };
};

export const deleteQuestion = (questionId) => {
    return {
        type: EVALUATION_QUESTION_DELETE,
        questionId
    };
};