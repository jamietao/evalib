import { EVALUATION_CREATE } from '../actions/types';

let defaultState = {
    evaluations: [
        { name: "2018年英语四级考试", description: "2018年英语四级英语考试真题" },
        { name: "2017年英语四级考试", description: "2017年英语四级英语考试真题" },
        { name: "2016年英语四级考试", description: "2016年英语四级英语考试真题" },
        { name: "2015年英语四级考试", description: "2015年英语四级英语考试真题" },
        { name: "2014年英语四级考试", description: "2014年英语四级英语考试真题" },
        { name: "2013年英语四级考试", description: "2013年英语四级英语考试真题" },
        { name: "2012年英语四级考试", description: "2012年英语四级英语考试真题" },
        { name: "2011年英语四级考试", description: "2011年英语四级英语考试真题" },
        { name: "2010年英语四级考试", description: "2010年英语四级英语考试真题" },
        { name: "2009年英语四级考试", description: "2009年英语四级英语考试真题" },
        { name: "2008年英语四级考试", description: "2008年英语四级英语考试真题" }
    ],
    users: []
};

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case EVALUATION_CREATE: {
            let newEvaluations = [
                ...state.evaluations,
                {
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
        default:
            return state;
    }
}

export default reducers;