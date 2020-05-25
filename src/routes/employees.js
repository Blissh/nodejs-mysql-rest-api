const express = require('express');
const router = express.Router();

const db_connection = require('../database.js');

//Get all employees
router.get('/', (req,res)=>{
    db_connection.query('SELECT * FROM employees', (err, rows, fields)=>{
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//Get only one employee
router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    db_connection.query('SELECT * FROM employees WHERE id=?',[id], (err, rows, fields)=>{
        if (!err) {
            res.json(rows[0]);

        }else{
            console.log('Error gettings employee');
        }
    });
});


//Insert employee
router.post('/', (req, res)=>{
    const id = 0;
    const { name, salary } = req.body;
    const query = 'CALL employeeCE(?,?,?)';
    db_connection.query(query, [id, name, salary],(err, row, fields)=>{
        if (!err) {
            res.json({Status : 'Employee sucessfully updated', Rows:fields});
            
        } else {
            console.log("Error updating", err);
        }
    })
});

//Update        
router.put('/', (req,res)=>{
    const { id } = req.params;
    const { name, salary } = req.body;
    const query = 'CALL employeeCE(?,?,?)';
    db_connection.query(query, [id, name, salary], (err, rows, fields)=>{
        if (!err) {
            console.log("Employee updated ;)");
        } else {
            console.log("Update error", err);
        }
    });
});

// Delete 

router.delete('/:id', (req, res)=>{
    const { id } = req.params;
    const query = 'DELETE FROM employee WHERE id=?';
    db_connection.query(query, [id], (err)=>{
        if (!err) {
            console.log("Employee deleted");
        } else {
            console.log("Error deleting",err);
        }
    });
});




module.exports = router;