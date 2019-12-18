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
    "update_id": 1,
    "headline": "Update no. 1 for class 1A",
    "content": "Class 1A content 1",
    "class_id": 1,
    "author": "Mrs Krabappel"
    },
    {
    "update_id": 2,
    "headline": "Update no. 2 for class 1A",
    "content": "Class 1A content 2",
    "class_id": 1,
    "author": "Mr Kupferberg"
    },
    {
    "update_id": 3,
    "headline": "Update no. 3 for class 1A",
    "content": "Class 1A content 3",
    "class_id": 1,
    "author": "Mrs Krabappel"
},
{
    "update_id": 4,
    "headline": "Update no. 4 for class 1A",
    "content": "Class 1A content 4",
    "class_id": 1,
    "author": "Mrs Krabappel"
},
{
    "update_id": 5,
    "headline": "Update no. 1 for class 1B",
    "content": "Class 1B content 1",
    "class_id": 2,
    "author": "Mr Bergstrom"
},
{
    "update_id": 6,
    "headline": "Update no. 2 for class 1B",
    "content": "Class 1B content 2",
    "class_id": 2,
    "author": "Mrs Pommelhorst"
},
{
    "update_id": 7,
    "headline": "Update no. 3 for class 1B",
    "content": "Class 1B content 3",
    "class_id": 2,
    "author": "Mrs Krabappel"
},
{
    "update_id": 8,
    "headline": "Update no. 4 for class 1B",
    "content": "Class 1B content 4",
    "class_id": 2,
    "author": "Mrs Krabappel"
},

{
    "update_id": 9,
    "headline": "Update no. 1 for class 1C",
    "content": "Class 1C content 1",
    "class_id": 3,
    "author": "Mr Skinner"
},
{
    "update_id": 10,
    "headline": "Update no. 2 for class 1C",
    "content": "Class 1C content 2",
    "class_id": 3,
    "author": "Mr Bergstrom"
},
{
    "update_id": 11,
    "headline": "Update no. 3 for class 1C",
    "content": "Class 1C content 3",
    "class_id": 3,
    "author": "Mrs Krabappel"
},
{
    "update_id": 12,
    "headline": "Update no. 4 for class 1C",
    "content": "Class 1C content 4",
    "class_id": 3,
    "author": "Mrs Hoover"
},

{
    "update_id": 13,
    "headline": "Update no. 1 for class 2A",
    "content": "Class 1B content 1",
    "class_id": 4,
    "author": "Mr Bergstrom"
},
{
    "update_id": 14,
    "headline": "Update no. 2 for class 2A",
    "content": "Class 2A content 2",
    "class_id": 4,
    "author": "Mr Skinner"
},
{
    "update_id": 15,
    "headline": "Update no. 3 for class 2A",
    "content": "Class 2A content 3",
    "class_id": 4,
    "author": "Mr Chalmers"
},
{
    "update_id": 16,
    "headline": "Update no. 4 for class 2A",
    "content": "Class 1B content 4",
    "class_id": 4,
    "author": "Mr Flanders"
},

{
    "update_id": 17,
    "headline": "Update no. 1 for class 2B",
    "content": "Class 2B content 1",
    "class_id": 5,
    "author": "Mr Flanders"
},
{
    "update_id": 18,
    "headline": "Update no. 2 for class 2B",
    "content": "Class 2B content 2",
    "class_id": 5,
    "author": "Mr Chalmers"
},
{
    "update_id": 19,
    "headline": "Update no. 3 for class 2B",
    "content": "Class 2B content 3",
    "class_id": 5,
    "author": "Mrs Hoover"
},
{
    "update_id": 20,
    "headline": "Update no. 4 for class 2B",
    "content": "Class 2B content 4",
    "class_id": 5,
    "author": "Mrs Pommelhorst"
},

{
    "update_id": 21,
    "headline": "Update no. 1 for class 2C",
    "content": "Class 2C content 1",
    "class_id": 6,
    "author": "Mr Skinner"
},
{
    "update_id": 22,
    "headline": "Update no. 2 for class 2C",
    "content": "Class 2C content 2",
    "class_id": 6,
    "author": "Mrs Pommelhorst"
},
{
    "update_id": 23,
    "headline": "Update no. 3 for class 2C",
    "content": "Class 2C content 3",
    "class_id": 6,
    "author": "Mr Kupferberg"
},
{
    "update_id": 24,
    "headline": "Update no. 4 for class 2C",
    "content": "Class 2C content 4",
    "class_id": 6,
    "author": "Mr Kupferberg"
},
]

const homeworkList = [
    {
        "subject": "Math",
        "homework": "page 200 no. 1-3",
        "due_date": "2020-01-22T16:28:32.615Z",
        "teacher_id": 1, 
        "class_id": 1
    },
    {
        "subject": "Art",
        "homework": "Draw a picture",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 2,
        "class_id": 1
    },
    {
        "subject": "History",
        "homework": "Read page 20-30",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 3,
        "class_id": 1
    },
    {
        "subject": "Languages",
        "homework": "Learn vocabulary",
        "due_date": "2020-01-18T16:28:32.615Z",
        "teacher_id": 4,
        "class_id": 1
    },
    {
        "subject": "Literature",
        "homework": "Write a poem",
        "due_date": "2020-01-15T16:28:32.615Z",
        "teacher_id": 5,
        "class_id": 1
    },
    {
        "subject": "Music",
        "homework": "Sing a song",
        "due_date": "2020-01-16T16:28:32.615Z",
        "teacher_id": 6,
        "class_id": 1
    },
    {
        "subject": "Social Studies",
        "homework": "Do something social",
        "due_date": "2020-01-17T16:28:32.615Z",
        "teacher_id": 7,
        "class_id": 1
    },
    {
        "subject": "Biology",
        "homework": "Plant a tree",
        "due_date": "2020-01-14T16:28:32.615Z",
        "teacher_id": 8,
        "class_id": 1
    },
    {
        "subject": "Math",
        "homework": "count to 100",
        "due_date": "2020-01-22T16:28:32.615Z",
        "teacher_id": 1, 
        "class_id": 2
    },
    {
        "subject": "Art",
        "homework": "Make art",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 2,
        "class_id": 2
    },
    {
        "subject": "History",
        "homework": "Make history",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 3,
        "class_id": 2
    },
    {
        "subject": "Languages",
        "homework": "Speak",
        "due_date": "2020-01-18T16:28:32.615Z",
        "teacher_id": 4,
        "class_id": 2
    },
    {
        "subject": "Literature",
        "homework": "Write literature",
        "due_date": "2020-01-15T16:28:32.615Z",
        "teacher_id": 5,
        "class_id": 2
    },
    {
        "subject": "Music",
        "homework": "Write a song",
        "due_date": "2020-01-16T16:28:32.615Z",
        "teacher_id": 6,
        "class_id": 2
    },
    {
        "subject": "Social Studies",
        "homework": "Be social",
        "due_date": "2020-01-17T16:28:32.615Z",
        "teacher_id": 7,
        "class_id": 2
    },
    {
        "subject": "Biology",
        "homework": "Feed your pet",
        "due_date": "2020-01-14T16:28:32.615Z",
        "teacher_id": 8,
        "class_id": 2
    },

    {
        "subject": "Math",
        "homework": "subtract and divide",
        "due_date": "2020-01-22T16:28:32.615Z",
        "teacher_id": 1, 
        "class_id": 3
    },
    {
        "subject": "Art",
        "homework": "Go to the museum",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 2,
        "class_id": 3
    },
    {
        "subject": "History",
        "homework": "Who was Napoleon?",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 3,
        "class_id": 3
    },
    {
        "subject": "Languages",
        "homework": "Read something",
        "due_date": "2020-01-18T16:28:32.615Z",
        "teacher_id": 4,
        "class_id": 3
    },
    {
        "subject": "Literature",
        "homework": "What is your favourite book about?",
        "due_date": "2020-01-15T16:28:32.615Z",
        "teacher_id": 5,
        "class_id": 3
    },
    {
        "subject": "Music",
        "homework": "Listen to music",
        "due_date": "2020-01-16T16:28:32.615Z",
        "teacher_id": 6,
        "class_id": 3
    },
    {
        "subject": "Social Studies",
        "homework": "What is social",
        "due_date": "2020-01-17T16:28:32.615Z",
        "teacher_id": 7,
        "class_id": 3
    },
    {
        "subject": "Biology",
        "homework": "Catch a worm",
        "due_date": "2020-01-14T16:28:32.615Z",
        "teacher_id": 8,
        "class_id": 3
    },

    {
        "subject": "Math",
        "homework": "More math homework",
        "due_date": "2020-01-22T16:28:32.615Z",
        "teacher_id": 1, 
        "class_id": 4
    },
    {
        "subject": "Art",
        "homework": "More art homework",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 2,
        "class_id": 4
    },
    {
        "subject": "History",
        "homework": "More history homework",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 3,
        "class_id": 4
    },
    {
        "subject": "Languages",
        "homework": "More languages homework",
        "due_date": "2020-01-18T16:28:32.615Z",
        "teacher_id": 4,
        "class_id": 4
    },
    {
        "subject": "Literature",
        "homework": "More literature homework",
        "due_date": "2020-01-15T16:28:32.615Z",
        "teacher_id": 5,
        "class_id": 4
    },
    {
        "subject": "Music",
        "homework": "More music homework",
        "due_date": "2020-01-16T16:28:32.615Z",
        "teacher_id": 6,
        "class_id": 4
    },
    {
        "subject": "Social Studies",
        "homework": "More social studies homework",
        "due_date": "2020-01-17T16:28:32.615Z",
        "teacher_id": 7,
        "class_id": 4
    },
    {
        "subject": "Biology",
        "homework": "More biology homework",
        "due_date": "2020-01-14T16:28:32.615Z",
        "teacher_id": 8,
        "class_id": 4
    },

    {
        "subject": "Math",
        "homework": "Math homework",
        "due_date": "2020-01-22T16:28:32.615Z",
        "teacher_id": 1, 
        "class_id": 5
    },
    {
        "subject": "Art",
        "homework": "Art homework",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 2,
        "class_id": 5
    },
    {
        "subject": "History",
        "homework": "History homework",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 3,
        "class_id": 5
    },
    {
        "subject": "Languages",
        "homework": "Languages homework",
        "due_date": "2020-01-18T16:28:32.615Z",
        "teacher_id": 4,
        "class_id": 5
    },
    {
        "subject": "Literature",
        "homework": "Literature homework",
        "due_date": "2020-01-15T16:28:32.615Z",
        "teacher_id": 5,
        "class_id": 5
    },
    {
        "subject": "Music",
        "homework": "Music homework",
        "due_date": "2020-01-16T16:28:32.615Z",
        "teacher_id": 6,
        "class_id": 5
    },
    {
        "subject": "Social Studies",
        "homework": "Social studies homework",
        "due_date": "2020-01-17T16:28:32.615Z",
        "teacher_id": 7,
        "class_id": 5
    },
    {
        "subject": "Biology",
        "homework": "Biology homework",
        "due_date": "2020-01-14T16:28:32.615Z",
        "teacher_id": 8,
        "class_id": 5
    },
    {
        "subject": "Math",
        "homework": "Math homework for class 2C",
        "to_do": "page 233 no. 8-15",
        "due_date": "2020-01-21T16:28:32.615Z",
        "class_id": 6
    },
    {
        "subject": "Art",
        "homework": "Art homework for class 2C",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 2,
        "class_id": 6
    },
    {
        "subject": "History",
        "homework": "History homework for class 2C",
        "due_date": "2020-01-20T16:28:32.615Z",
        "teacher_id": 3,
        "class_id": 6
    },
    {
        "subject": "Languages",
        "homework": "Languages homework for class 2C",
        "due_date": "2020-01-18T16:28:32.615Z",
        "teacher_id": 4,
        "class_id": 6
    },
    {
        "subject": "Literature",
        "homework": "Literature homework for class 2C",
        "due_date": "2020-01-15T16:28:32.615Z",
        "teacher_id": 5,
        "class_id": 6
    },
    {
        "subject": "Music",
        "homework": "Music homework for class 2C",
        "due_date": "2020-01-16T16:28:32.615Z",
        "teacher_id": 6,
        "class_id": 6
    },
    {
        "subject": "Social Studies",
        "homework": "Social homework for class 2C",
        "due_date": "2020-01-17T16:28:32.615Z",
        "teacher_id": 7,
        "class_id": 6
    },
    {
        "subject": "Biology",
        "homework": "Biology homework for class 2C",
        "due_date": "2020-01-14T16:28:32.615Z",
        "teacher_id": 8,
        "class_id": 6
    },
]
export default {
    teachersList,
    classList,
    updatesList,
    homeworkList
};