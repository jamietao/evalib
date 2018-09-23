import { EVALUATION_CREATE, EVALUATION_UPDATE, EVALUATION_DELETE } from '../constants';
import { EVALUATION_SUBJECT_ADD, EVALUATION_SUBJECT_UPDATE, EVALUATION_SUBJECT_DELETE } from '../constants';

let nextId = 100;
let defaultState = {
    evaluations: [
        {
            id: "1",
            name: "2008年英语四级考试",
            description: "2008年英语四级英语考试真题",
        }
    ],
    sections: [
        {
            "id": "1",
            "evaluationId": "1",
            "label": "写作",
            "description": "Directions: For this part, you are allowed 30 minutes to write a short essay on the topic of Welcome to our club. You should write at least 120 words following the outline given bellow:",
            "settings": {
                "timeMinutes": 30
            }
        },
        {
            "id": "2",
            "evaluationId": "1",
            "label": "快速阅读",
            "description": "Directions: In this part, you will have 15 minutes to go over the passage quickly and answer the questions." +
                "For questions 1-7, mark Y (for YES) if the statement agrees with the information given in the passage;" +
                "N (for NO) if statement contradicts the information given in the passage;" +
                "NG (for NOT GIVEN) if the information is not given in the passage." +
                "For question 8-10, complete the sentences with the information given in the passage.",
            "settings": {
                "timeMinutes": 15
            },
        },
        {
            "id": "3",
            "evaluationId": "1",
            "label": "阅读理解",
            "description": "Directions: There are 2 passages in this section. Each passage is followed by some questions or unfinished statements. For each of them there are four choices marked A) , B) , C) and D) . You should decide on the best choice and mark the corresponding letter on Answer Sheet 2 with a single line through the centre.",
            "questions": []
        },
        {
            "id": "4",
            "evaluationId": "1",
            "label": "翻译",
            "description": "Directions: Complete the sentences by translating into English the Chinese given in brackets.",
            "questions": []
        },
    ],
    "subjects": [
        {
            "id": "1",
            "sectionId": "2",
            "subjectType": "singleChoiceQuestion",
            "description": "What does the recent study of Norwegian mothers show?",
            "options": [
                { "label": "A", "description": "A choice" },
                { "label": "B", "description": "B choice" },
                { "label": "C", "description": "C choice" },
                { "label": "D", "description": "D choice" }
            ],
            "correctAnswer": ["A"]
        },
        {
            "id": "2",
            "sectionId": "2",
            "subjectType": "singleChoiceQuestion",
            "description": "What does the recent study of Norwegian mothers show?",
            "options": [
                { "label": "A", "description": "A choice" },
                { "label": "B", "description": "B choice" },
                { "label": "C", "description": "C choice" },
                { "label": "D", "description": "D choice" }
            ]
        },
        {
            "id": "3",
            "sectionId": "2",
            "subjectType": "singleChoiceQuestion",
            "description": "What does the recent study of Norwegian mothers show?",
            "options": [
                { "label": "A", "description": "A choice" },
                { "label": "B", "description": "B choice" },
                { "label": "C", "description": "C choice" },
                { "label": "D", "description": "D choice" }
            ]
        }
    ],
    users: []
};

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case EVALUATION_CREATE: {
            let newId = nextId++;
            let newEvaluations = [
                ...state.evaluations,
                {
                    'id': newId + '',
                    'name': action.name,
                    'description': action.description
                }
            ];

            return {
                ...state,
                evaluations: newEvaluations
            };
        }
        case EVALUATION_UPDATE: {
            let newEvaluations = state.evaluations.map(item => {
                if (item.id === action.id) {
                    return {
                        id: action.id,
                        name: action.name,
                        description: action.description
                    };
                } else {
                    return item;
                }
            });

            return {
                ...state,
                evaluations: newEvaluations
            };
        }
        case EVALUATION_DELETE: {
            let newEvaluations = state.evaluations.filter(item =>
                item.id !== action.id);

            return {
                ...state,
                evaluations: newEvaluations
            };
        }
        case EVALUATION_SUBJECT_ADD: {
            if (!action.subject.sectionId) {
                throw new Error("Subject.SectionId is required");
            }
            let section = state.sections.find(s => s.id === action.subject.sectionId);
            if (section == null) {
                throw new Error("Invalid Subject.SectionId, section does not exist");
            }

            let subject = {};
            Object.assign(subject, action.subject);
            subject.id = (++nextId) + "";
            return {
                ...state,
                subjects: [...state.subjects, subject]
            };
        }

        case EVALUATION_SUBJECT_UPDATE: {
            if (!action.subject.sectionId || !action.subject.id) {
                throw new Error("Subject.Id and Subject.SectionId are required fields");
            }

            let question = state.subjects.find(q => q.id === action.subject.id);
            if (question == null) {
                throw new Error("Subject not found, cannot be updated");
            }

            if (question.sectionId !== action.subject.sectionId) {
                throw new Error("Subject.SectionId cannot be updated");
            }

            let newQuestions = state.subjects.map(q => {
                if (q.id === action.subject.id) {
                    return action.subject;
                }
                return q;
            });

            return {
                ...state,
                subjects: newQuestions
            };
        }

        case EVALUATION_SUBJECT_DELETE: {
            let newQuestions = state.subjects.filter(q => q.id !== action.subjectId);
            return {
                ...state,
                subjects: newQuestions
            };
        }

        default:
            return state;
    }
}

export default reducers;