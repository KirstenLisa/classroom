const teachersList = [
    {
        "teacher_name": "Mrs Krabappel",
        "id": 1
    },
    {
        "teacher_name": "Mr Bergstrom",
        "id": 2
    },
    {
        "teacher_name": "Mrs Hoover",
        "id": 3
    },
    {
        "teacher_name":  "Mr Skinner",
        "id": 4
    },
    {
        "teacher_name": "Mr Flanders",
        "id": 5
    },
    {
        "teacher_name": "Mr Kupferberg",
        "id": 6
    },
    {
        "teacher_name": "Mr Chalmers",
        "id": 7
    },
    {
        "teacher_name": "Mrs Pommelhorst",
        "id": 8
    },


]

const classList = [ 
    {
    "class_id": 1,
    "class_name": "1A",
    "class_teacher": "Mrs Krabappel"
    },
    {
    "class_id": 2,
    "class_name": "1B",
    "class_teacher": "Mr Bergstrom"
    },
    {
    "class_id": 3,
    "class_name": "1C",
    "class_teacher": "Mrs Hoover"
    },
    {
    "class_id": 4,
    "class_name": "2A",
    "class_teacher": "Mr Skinner"
    },
    {
    "class_id": 5,
    "class_name": "2B",
    "class_teacher": "Mr Flanders"
    },
    {
    "class_id": 6,
    "class_name": "2C",
    "class_teacher": "Mr Kupferberg"
    }
]

const updatesList = [
    {
    "update_id": 101,
    "headline": "Update no. 1 for class 1A",
    "content": "Class 1A content 1",
    "class_id": 1,
    "author": "Mrs Krabappel",
    "date": "2020-01-22T16:28:32.615Z"
    },
    {
    "update_id": 102,
    "headline": "Update no. 2 for class 1A",
    "content": "Class 1A content 2",
    "class_id": 1,
    "author": "Mr Kupferberg",
    "date": "2020-01-22T16:28:32.615Z"
    },
    {
    "update_id": 103,
    "headline": "Update no. 3 for class 1A",
    "content": "Class 1A content 3",
    "class_id": 1,
    "author": "Mrs Krabappel",
    "date": "2020-01-22T16:28:32.615Z"
},
{
    "update_id": 104,
    "headline": "Update no. 4 for class 1A",
    "content": "Class 1A content 4",
    "class_id": 1,
    "author": "Mrs Krabappel",
    "date": "2020-01-22T16:28:32.615Z"
},
{
    "update_id": 105,
    "headline": "Update no. 1 for class 1B",
    "content": "Class 1B content 1",
    "class_id": 2,
    "author": "Mr Bergstrom",
    "date": "2020-01-22T16:28:32.615Z"
},
{
    "update_id": 106,
    "headline": "Update no. 2 for class 1B",
    "content": "Class 1B content 2",
    "class_id": 2,
    "author": "Mrs Pommelhorst",
    "date": "2020-01-22T16:28:32.615Z"
},
{
    "update_id": 107,
    "headline": "Update no. 3 for class 1B",
    "content": "Class 1B content 3",
    "class_id": 2,
    "author": "Mrs Krabappel",
    "date": "2020-01-22T16:28:32.615Z"
},
{
    "update_id": 108,
    "headline": "Update no. 4 for class 1B",
    "content": "Class 1B content 4",
    "class_id": 2,
    "author": "Mrs Krabappel",
    "date": "2020-01-22T16:28:32.615Z"
},

{
    "update_id": 109,
    "headline": "Update no. 1 for class 1C",
    "content": "Class 1C content 1",
    "class_id": 3,
    "author": "Mr Skinner",
    "date": "2020-01-22T16:28:32.615Z"
},
{
    "update_id": 110,
    "headline": "Update no. 2 for class 1C",
    "content": "Class 1C content 2",
    "class_id": 3,
    "author": "Mr Bergstrom",
    "date": "2020-01-22T16:28:32.615Z"
},
{
    "update_id": 111,
    "headline": "Update no. 3 for class 1C",
    "content": "Class 1C content 3",
    "class_id": 3,
    "author": "Mrs Krabappel",
    "date": "2020-01-22T16:28:32.615Z"
},
{
    "update_id": 112,
    "headline": "Update no. 4 for class 1C",
    "content": "Class 1C content 4",
    "class_id": 3,
    "author": "Mrs Hoover",
    "date": "2020-01-22T16:28:32.615Z"
},

{
    "update_id": 113,
    "headline": "Update no. 1 for class 2A",
    "content": "Class 1B content 1",
    "class_id": 4,
    "author": "Mr Bergstrom",
    "date": "2020-01-22T16:28:32.615Z"
},
{
    "update_id": 114,
    "headline": "Update no. 2 for class 2A",
    "content": "Class 2A content 2",
    "class_id": 4,
    "author": "Mr Skinner",
    "date": "2020-01-22T16:28:32.615Z"
},
{
    "update_id": 115,
    "headline": "Update no. 3 for class 2A",
    "content": "Class 2A content 3",
    "class_id": 4,
    "author": "Mr Chalmers",
    "date": "2020-01-22T16:28:32.615Z"
},
{
    "update_id": 116,
    "headline": "Update no. 4 for class 2A",
    "content": "Class 1B content 4",
    "class_id": 4,
    "author": "Mr Flanders",
    "date": "2020-01-22T16:28:32.615Z"
},

{
    "update_id": 117,
    "headline": "Update no. 1 for class 2B",
    "content": "Class 2B content 1",
    "class_id": 5,
    "author": "Mr Flanders",
    "date": "2020-01-22T16:28:32.615Z"
},
{
    "update_id": 118,
    "headline": "Update no. 2 for class 2B",
    "content": "Class 2B content 2",
    "class_id": 5,
    "author": "Mr Chalmers",
    "date": "2020-01-22T16:28:32.615Z"
},
{
    "update_id": 119,
    "headline": "Update no. 3 for class 2B",
    "content": "Class 2B content 3",
    "class_id": 5,
    "author": "Mrs Hoover",
    "date": "2020-01-22T16:28:32.615Z"
},
{
    "update_id": 120,
    "headline": "Update no. 4 for class 2B",
    "content": "Class 2B content 4",
    "class_id": 5,
    "author": "Mrs Pommelhorst",
    "date": "2020-01-22T16:28:32.615Z"
},

{
    "update_id": 121,
    "headline": "Update no. 1 for class 2C",
    "content": "Class 2C content 1",
    "class_id": 6,
    "author": "Mr Skinner",
    "date": "2020-01-22T16:28:32.615Z"
},
{
    "update_id": 122,
    "headline": "Update no. 2 for class 2C",
    "content": "Class 2C content 2",
    "class_id": 6,
    "author": "Mrs Pommelhorst",
    "date": "2020-01-22T16:28:32.615Z"
},
{
    "update_id": 123,
    "headline": "Update no. 3 for class 2C",
    "content": "Class 2C content 3",
    "class_id": 6,
    "author": "Mr Kupferberg",
    "date": "2020-01-22T16:28:32.615Z"
},
{
    "update_id": 124,
    "headline": "Update no. 4 for class 2C",
    "content": "Class 2C content 4",
    "class_id": 6,
    "author": "Mr Kupferberg",
    "date": "2020-01-22T16:28:32.615Z"
},
]

const homeworkList = [
    {
        "id": 1,
        "homework_id": 11,
        "subject": "Math",
        "homework": "page 200 no. 1-3",
        "due_date": "2020-01-22T16:28:32.615Z",
        "teacher_id": 1,
        "teacher_name": "Mrs Krabappel",
        "class_id": 1
    },
    {
        "id": 2,
        "homework_id": 12,
        "subject": "Art",
        "homework": "Draw a picture",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 2,
        "teacher_name": "Mr Bergstrom",
        "class_id": 1
    },
    {
        "id": 3,
        "homework_id": 13,
        "subject": "History",
        "homework": "Read page 20-30",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 3,
        "teacher_name": "Mrs Hoover",
        "class_id": 1
    },
    {
        "id": 4,
        "homework_id": 14,
        "subject": "Languages",
        "homework": "Learn vocabulary",
        "due_date": "2020-01-18T16:28:32.615Z",
        "teacher_id": 4,
        "teacher_name":  "Mr Skinner",
        "class_id": 1
    },
    {
        "id": 5,
        "homework_id": 15,
        "subject": "Literature",
        "homework": "Write a poem",
        "due_date": "2020-01-15T16:28:32.615Z",
        "teacher_id": 5,
        "teacher_name": "Mr Flanders",
        "class_id": 1
    },
    {
        "id": 6,
        "homework_id": 16,
        "subject": "Music",
        "homework": "Sing a song",
        "due_date": "2020-01-16T16:28:32.615Z",
        "teacher_id": 6,
        "teacher_name": "Mr Kupferberg",
        "class_id": 1
    },
    {
        "id": 7,
        "homework_id": 17,
        "subject": "Social Studies",
        "homework": "Do something social",
        "due_date": "2020-01-17T16:28:32.615Z",
        "teacher_id": 7,
        "teacher_name": "Mr Chalmers",
        "class_id": 1
    },
    {
        "id": 8,
        "homework_id": 18,
        "subject": "Biology",
        "homework": "Plant a tree",
        "due_date": "2020-01-14T16:28:32.615Z",
        "teacher_id": 8,
        "teacher_name": "Mrs Pommelhorst",
        "class_id": 1
    },
    {
        "id": 9,
        "homework_id": 21,
        "subject": "Math",
        "homework": "count to 100",
        "due_date": "2020-01-22T16:28:32.615Z",
        "teacher_id": 1,
        "teacher_name": "Mrs Krabappel", 
        "class_id": 2
    },
    {
        "id": 10,
        "homework_id": 22,
        "subject": "Art",
        "homework": "Make art",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 2,
        "teacher_name": "Mr Bergstrom",
        "class_id": 2
    },
    {
        "id": 11,
        "homework_id": 23,
        "subject": "History",
        "homework": "Make history",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 3,
        "teacher_name": "Mrs Hoover",
        "class_id": 2
    },
    {
        "id": 12,
        "homework_id": 24,
        "subject": "Languages",
        "homework": "Speak",
        "due_date": "2020-01-18T16:28:32.615Z",
        "teacher_id": 4,
        "teacher_name":  "Mr Skinner",
        "class_id": 2
    },
    {
        "id": 13,
        "homework_id": 25,
        "subject": "Literature",
        "homework": "Write literature",
        "due_date": "2020-01-15T16:28:32.615Z",
        "teacher_id": 5,
        "teacher_name": "Mr Flanders",
        "class_id": 2
    },
    {
        "id": 14,
        "homework_id": 26,
        "subject": "Music",
        "homework": "Write a song",
        "due_date": "2020-01-16T16:28:32.615Z",
        "teacher_id": 6,
        "teacher_name": "Mr Kupferberg",
        "class_id": 2
    },
    {
        "id": 15,
        "homework_id": 27,
        "subject": "Social Studies",
        "homework": "Be social",
        "due_date": "2020-01-17T16:28:32.615Z",
        "teacher_id": 7,
        "teacher_name": "Mr Chalmers",
        "class_id": 2
    },
    {
        "id": 16,
        "homework_id": 28,
        "subject": "Biology",
        "homework": "Feed your pet",
        "due_date": "2020-01-14T16:28:32.615Z",
        "teacher_id": 8,
        "teacher_name": "Mrs Pommelhorst",
        "class_id": 2
    },

    {
        "id": 17,
        "homework_id": 31,
        "subject": "Math",
        "homework": "subtract and divide",
        "due_date": "2020-01-22T16:28:32.615Z",
        "teacher_id": 1,
        "teacher_name": "Mrs Krabappel", 
        "class_id": 3
    },
    {
        "id": 55,
        "homework_id": 31,
        "subject": "Math",
        "homework": "multiply",
        "due_date": "2020-01-21T16:28:32.615Z",
        "teacher_id": 1,
        "teacher_name": "Mrs Krabappel", 
        "class_id": 3
    },

    {
        "id": 18,
        "homework_id": 32,
        "subject": "Art",
        "homework": "Go to the museum",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 2,
        "teacher_name": "Mr Bergstrom",
        "class_id": 3
    },
    {
        "id": 19,
        "homework_id": 33,
        "subject": "History",
        "homework": "Who was Napoleon?",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 3,
        "teacher_name": "Mrs Hoover",
        "class_id": 3
    },
    {
        "id": 20,
        "homework_id": 34,
        "subject": "Languages",
        "homework": "Read something",
        "due_date": "2020-01-18T16:28:32.615Z",
        "teacher_id": 4,
        "teacher_name":  "Mr Skinner",
        "class_id": 3
    },
    {
        "id": 21,
        "homework_id": 35,
        "subject": "Literature",
        "homework": "What is your favourite book about?",
        "due_date": "2020-01-15T16:28:32.615Z",
        "teacher_id": 5,
        "teacher_name": "Mr Flanders",
        "class_id": 3
    },
    {
        "id": 22,
        "homework_id": 36,
        "subject": "Music",
        "homework": "Listen to music",
        "due_date": "2020-01-16T16:28:32.615Z",
        "teacher_id": 6,
        "teacher_name": "Mr Kupferberg",
        "class_id": 3
    },
    {
        "id": 23,
        "homework_id": 37,
        "subject": "Social Studies",
        "homework": "What is social",
        "due_date": "2020-01-17T16:28:32.615Z",
        "teacher_id": 7,
        "teacher_name": "Mr Chalmers",
        "class_id": 3
    },
    {
        "id": 24,
        "homework_id": 38,
        "subject": "Biology",
        "homework": "Catch a worm",
        "due_date": "2020-01-14T16:28:32.615Z",
        "teacher_id": 8,
        "teacher_name": "Mrs Pommelhorst",
        "class_id": 3
    },

    {
        "id": 25,
        "homework_id": 41,
        "subject": "Math",
        "homework": "More math homework",
        "due_date": "2020-01-22T16:28:32.615Z",
        "teacher_id": 1,
        "teacher_name": "Mrs Krabappel", 
        "class_id": 4
    },
    {
        "id": 26,
        "homework_id": 42,
        "subject": "Art",
        "homework": "More art homework",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 2,
        "teacher_name": "Mr Bergstrom",
        "class_id": 4
    },
    {
        "id": 27,
        "homework_id": 43,
        "subject": "History",
        "homework": "More history homework",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 3,
        "teacher_name": "Mrs Hoover",
        "class_id": 4
    },
    {
        "id": 28,
        "homework_id": 44,
        "subject": "Languages",
        "homework": "More languages homework",
        "due_date": "2020-01-18T16:28:32.615Z",
        "teacher_id": 4,
        "teacher_name":  "Mr Skinner",
        "class_id": 4
    },
    {
        "id": 29,
        "homework_id": 45,
        "subject": "Literature",
        "homework": "More literature homework",
        "due_date": "2020-01-15T16:28:32.615Z",
        "teacher_id": 5,
        "teacher_name": "Mr Flanders",
        "class_id": 4
    },
    {
        "id": 30,
        "homework_id": 46,
        "subject": "Music",
        "homework": "More music homework",
        "due_date": "2020-01-16T16:28:32.615Z",
        "teacher_id": 6,
        "teacher_name": "Mr Kupferberg",
        "class_id": 4
    },
    {
        "id": 31,
        "homework_id": 47,
        "subject": "Social Studies",
        "homework": "More social studies homework",
        "due_date": "2020-01-17T16:28:32.615Z",
        "teacher_id": 7,
        "teacher_name": "Mr Chalmers",
        "class_id": 4
    },
    {
        "id": 32,
        "homework_id": 48,
        "subject": "Biology",
        "homework": "More biology homework",
        "due_date": "2020-01-14T16:28:32.615Z",
        "teacher_id": 8,
        "teacher_name": "Mrs Pommelhorst",
        "class_id": 4
    },

    {
        "id": 33,
        "homework_id": 51,
        "subject": "Math",
        "homework": "Math homework",
        "due_date": "2020-01-22T16:28:32.615Z",
        "teacher_id": 1,
        "teacher_name": "Mrs Krabappel",
        "class_id": 5
    },
    {
        "id": 34,
        "homework_id": 52,
        "subject": "Art",
        "homework": "Art homework",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 2,
        "teacher_name": "Mr Bergstrom",
        "class_id": 5
    },
    {
        "id": 35,
        "homework_id": 53,
        "subject": "History",
        "homework": "History homework",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 3,
        "teacher_name": "Mrs Hoover",
        "class_id": 5
    },
    {
        "id": 36,
        "homework_id": 54,
        "subject": "Languages",
        "homework": "Languages homework",
        "due_date": "2020-01-18T16:28:32.615Z",
        "teacher_id": 4,
        "teacher_name":  "Mr Skinner",
        "class_id": 5
    },
    {
        "id": 37,
        "homework_id": 55,
        "subject": "Literature",
        "homework": "Literature homework",
        "due_date": "2020-01-15T16:28:32.615Z",
        "teacher_id": 5,
        "teacher_name": "Mr Flanders",
        "class_id": 5
    },
    {
        "id": 38,
        "homework_id": 56,
        "subject": "Music",
        "homework": "Music homework",
        "due_date": "2020-01-16T16:28:32.615Z",
        "teacher_id": 6,
        "teacher_name": "Mr Kupferberg",
        "class_id": 5
    },
    {
        "id": 39,
        "homework_id": 57,
        "subject": "Social Studies",
        "homework": "Social studies homework",
        "due_date": "2020-01-17T16:28:32.615Z",
        "teacher_id": 7,
        "teacher_name": "Mr Chalmers",
        "class_id": 5
    },
    {
        "id": 40,
        "homework_id": 58,
        "subject": "Biology",
        "homework": "Biology homework",
        "due_date": "2020-01-14T16:28:32.615Z",
        "teacher_id": 8,
        "teacher_name": "Mrs Pommelhorst",
        "class_id": 5
    },
    {
        "id": 41,
        "homework_id": 61,
        "subject": "Math",
        "homework": "Math homework for class 2C",
        "due_date": "2020-01-21T16:28:32.615Z",
        "teacher_id": 1,
        "teacher_name": "Mrs Krabappel",
        "class_id": 6
    },
    {
        "id": 42,
        "homework_id": 62,
        "subject": "Art",
        "homework": "Art homework for class 2C",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 2,
        "teacher_name": "Mr Bergstrom",
        "class_id": 6
    },
    {
        "id": 43,
        "homework_id": 63,
        "subject": "History",
        "homework": "History homework for class 2C",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 3,
        "teacher_name": "Mrs Hoover",
        "class_id": 6
    },
    {
        "id": 44,
        "homework_id": 64,
        "subject": "Languages",
        "homework": "Languages homework for class 2C",
        "due_date": "2020-01-18T16:28:32.615Z",
        "teacher_id": 4,
        "teacher_name":  "Mr Skinner",
        "class_id": 6
    },
    {
        "id": 45,
        "homework_id": 65,
        "subject": "Literature",
        "homework": "Literature homework for class 2C",
        "due_date": "2020-01-15T16:28:32.615Z",
        "teacher_id": 5,
        "teacher_name": "Mr Flanders",
        "class_id": 6
    },
    {
        "id": 46,
        "homework_id": 66,
        "subject": "Music",
        "homework": "Music homework for class 2C",
        "due_date": "2020-01-16T16:28:32.615Z",
        "teacher_id": 6,
        "teacher_name": "Mr Kupferberg",
        "class_id": 6
    },
    {
        "id": 47,
        "homework_id": 67,
        "subject": "Social Studies",
        "homework": "Social homework for class 2C",
        "due_date": "2020-01-17T16:28:32.615Z",
        "teacher_id": 7,
        "teacher_name": "Mr Chalmers",
        "class_id": 6
    },
    {
        "id": 48,
        "homework_id": 68,
        "subject": "Biology",
        "homework": "Biology homework for class 2C",
        "due_date": "2020-01-14T16:28:32.615Z",
        "teacher_id": 8,
        "teacher_name": "Mrs Pommelhorst",
        "class_id": 6
    },
]

const commentsList = [{
    "comment_id": 1,
    "comment": 'comment 1',
    "user_name": "Guy Inkocnito",
    "date": new Date(),
    "user_id": 1,
    "page_id": "33"
},
{
    "comment_id": 2,
    "comment": 'comment 2',
    "user_name": "Guy Inkocnito",
    "date": new Date(),
    "user_id": 1,
    "page_id": "111" 
},
{
    "comment_id": 3,
    "comment": 'comment 3',
    "user_name": "Guy Inkocnito",
    "date": new Date(),
    "user_id": 1,
    "page_id": "120"
},
{
    "comment_id": 4,
    "comment": 'comment 4',
    "user_name": "Guy Inkocnito",
    "date": new Date(),
    "user_id": 1,
    "page_id": "11"
},
{
    "comment_id": 5,
    "comment": 'comment 5',
    "user_name": "Guy Inkocnito",
    "date": new Date(),
    "user_id": 1,
    "page_id": "105"
},
{
    "comment_id": 6,
    "comment": 'comment 6',
    "user_name": "Guy Inkocnito",
    "date": new Date(),
    "user_id": 1,
    "page_id": "13"
}
]

export default {
    teachersList,
    classList,
    updatesList,
    homeworkList,
    commentsList
};