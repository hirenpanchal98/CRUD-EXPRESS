const Student = require('../models/student.model');

exports.student_create = function (req,res) {
    let student = new Student(
        {
            fname : req.body.fname,
            lname : req.body.lname,
            email : req.body.email,
            contact : req.body.contact
        }
    );

// exports.student_details = function (req, res) {
//         Student.findById(req.params.id, function (err, student) {
//             if (err) return next(err);
//             res.send(student);
//         })
//     };
    
// exports.student_update = function (req, res) {
//     Student.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, student) {
//         if (err) return next(err);
//         res.send('student udpated.');
//     });
// };

// exports.student_delete = function (req, res) {
//     Student.findByIdAndRemove(req.params.id, function (err) {
//         if (err) return next(err);
//         res.send('Deleted successfully!');
//     })
// };

    student.save(function (err) {
        if (err) {
            return console.log(err);
        }
        res.send('Student Created successfully')
    })
};