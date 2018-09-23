import { EVALUATION_CREATE, EVALUATION_UPDATE, EVALUATION_DELETE } from '../constants';
import {
    EVALUATION_SUBJECT_ADD, EVALUATION_SUBJECT_UPDATE,
    EVALUATION_SUBJECT_DELETE
} from '../constants';

export const createEvaluation = (name, description) => {
    return { type: EVALUATION_CREATE, name, description }
};

export const updateEvaluation = (id, name, description) => {
    return { type: EVALUATION_UPDATE, id, name, description }
};

export const deleteEvaluation = (id) => {
    return { type: EVALUATION_DELETE, id };
};

export const addSubject = (subject) => {
    return {
        type: EVALUATION_SUBJECT_ADD,
        subject
    };
};

export const updateSubject = (subject) => {
    return {
        type: EVALUATION_SUBJECT_UPDATE,
        subject
    };
};

export const deleteSubject = (subjectId) => {
    return {
        type: EVALUATION_SUBJECT_DELETE,
        subjectId
    };
};