import { EVALUATION_CREATE } from './types';
export const createEvaluation = (name, description) =>
    ({ type: EVALUATION_CREATE, name, description });