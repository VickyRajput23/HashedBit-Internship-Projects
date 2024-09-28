(function() {
    let studentsData = {
        student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
        student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
        student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    };

    // Declare 'result' only once
    let result = {};

    // For student1
    let total1 = studentsData.student1.subject1 + studentsData.student1.subject2 + studentsData.student1.subject3 + studentsData.student1.subject4 + studentsData.student1.subject5;
    let average1 = total1 / 5;
    result.student1 = { average: average1 };

    // For student2
    let total2 = studentsData.student2.subject1 + studentsData.student2.subject2 + studentsData.student2.subject3 + studentsData.student2.subject4 + studentsData.student2.subject5;
    let average2 = total2 / 5;
    result.student2 = { average: average2 };

    // For student3
    let total3 = studentsData.student3.subject1 + studentsData.student3.subject2 + studentsData.student3.subject3 + studentsData.student3.subject4 + studentsData.student3.subject5;
    let average3 = total3 / 5;
    result.student3 = { average: average3 };

    console.log(result);
})();
