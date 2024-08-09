const data = [
    { id: 1, question: ' Does your business operate in CA?', options: ['Yes','No'], correct: 'Yes',skip:false,next:null},
    { id: 2, question: 'How many employees do you have?', options: ['Less than 100', 'More than 100'], correct: 'Less than 100',skip:false,next:null},
    { id: 3, question: 'Do you serve food?', options: ['Yes', 'No'], correct: 'Yes',skip:false,next:5},
    { id: 4, question: 'Do you serve hot food?', options: ['Yes', 'No'], correct: 'Yes',skip:true,next:null },
    { id: 5, question: 'Do you host live music? ', options: ['Yes' , 'No' ],
        correct: 'Yes',skip:true,next:null }
];
export default data;