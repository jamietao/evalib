import { EVALUATION_CREATE, EVALUATION_UPDATE, EVALUATION_DELETE } from '../actions/types';

let nextId = 100;
let defaultState = {
    evaluations: [
        {
            id: "1",
            name: "2018年英语四级考试",
            description: "2018年英语四级英语考试真题",
            singleChoiceQuestions: [
                {
                    "description": "What does the recent study of Norwegian mothers show?",
                    "options": [
                        { "label": "A", "description": "A choice" },
                        { "label": "B", "description": "B choice" },
                        { "label": "C", "description": "C choice" },
                        { "label": "D", "description": "D choice" }
                    ],
                    "correctAnswer":"C"
                },
                {
                    "description": "What does the recent study of Norwegian mothers show?",
                    "options": [
                        { "label": "A", "description": "A choice" },
                        { "label": "B", "description": "B choice" },
                        { "label": "C", "description": "C choice" },
                        { "label": "D", "description": "D choice" }
                    ]
                },
                {
                    "description": "What does the recent study of Norwegian mothers show?",
                    "options": [
                        { "label": "A", "description": "A choice" },
                        { "label": "B", "description": "B choice" },
                        { "label": "C", "description": "C choice" },
                        { "label": "D", "description": "D choice" }
                    ]
                }
            ]
        },
        { id: "2", name: "2017年英语四级考试", description: "2017年英语四级英语考试真题" },
        { id: "3", name: "2016年英语四级考试", description: "2016年英语四级英语考试真题" },
        { id: "4", name: "2015年英语四级考试", description: "2015年英语四级英语考试真题" },
        { id: "5", name: "2014年英语四级考试", description: "2014年英语四级英语考试真题" },
        { id: "6", name: "2013年英语四级考试", description: "2013年英语四级英语考试真题" },
        { id: "7", name: "2012年英语四级考试", description: "2012年英语四级英语考试真题" },
        { id: "8", name: "2011年英语四级考试", description: "2011年英语四级英语考试真题" },
        { id: "9", name: "2010年英语四级考试", description: "2010年英语四级英语考试真题" },
        { id: "10", name: "2009年英语四级考试", description: "2009年英语四级英语考试真题" },
        { id: "11", name: "2008年英语四级考试", description: "2008年英语四级英语考试真题" }
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

            console.log(newEvaluations.length);

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
        default:
            return state;
    }
}

export default reducers;