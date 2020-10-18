import express from 'express'
import mysqlConnection from '../connection.js';

const router = express.Router();

//Get all visitor
router.get('/visitor', (req, res) => {
    try {
        mysqlConnection.query('SELECT * FROM Visitor', (err, rows, fields) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                res.send(rows);
                res.end();
            }
        });
    } catch (error) {
        console.log(error);
    }
});

//Get visitor by ID
router.get('/visitor/:id', (req, res) => {
    var id = req.params.id;
    try {
        mysqlConnection.query(`SELECT * FROM Visitor WHERE VisitorID = ${id}`, (err, rows, fields) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                res.send(rows);
                res.end();
            }
        })
    } catch (error) {
        console.log(error);
    }
});


//Add new visitor
router.post('/visitor', (req, res) => {
    const visitor = req.body;
    if (visitor) {
        try {
            mysqlConnection.query('INSERT INTO Visitor SET?', visitor, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    res.end();
                } else {
                    res.send(`New visitor has been added`);
                    res.end();
                }
            });
        } catch (error) {
            console.log(error);
        }

    }
});


//Delete doctor
router.delete('/visitor:id', (req, res) => {
    const id = req.params.id;
    if (id) {
        try {
            mysqlConnection.query(`DELETE FROM Visitor WHERE VisitorID = '${id}'`, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    res.end();
                } else {
                    res.send(`Visitor with the id ${id} deleted from the database`);
                    res.end();
                }
            });
        } catch (error) {
            console.log(error);
        }

    }
});


export default router;