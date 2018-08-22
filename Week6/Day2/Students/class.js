var Student = require("./students.js");

var Class = function(prof, room){
    this.Students = [];
    this.Professor = prof;
    this.RoomNumber = room;

    this.addStudent = function(name, subj, gpa){
        this.students.push(new Student(name, subj, gpa));
    };

    this.studentCount = function(){
        return this.Students.length;
    };
};


module.exports = Class;