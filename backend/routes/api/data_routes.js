// routes/api/records.js

const express = require('express');
const router = express.Router();

// Load Records model
const DocModel = require('../../models/Records');

// @route GET api/test
// @description tests api route
// @access Public
router.get('/test', (req, res) => res.send('API Route Test: Passed ✅'));

// @route GET api/all
// @description Get all documents
// @access Public
router.get('/all', (req, res) => {
  Records.find()
    .then(record => res.json(record))
    .catch(err => res.status(404).json({ norecordsfound: 'No records found' }));
});

// @route GET api/records/:id
// @description Get single record by id
// @access Public
router.get('/records/:id', (req, res) => {
  Records.findById(req.params.id)
    .then(record => res.json(record))
    .catch(err => res.status(404).json({ norecordfound: 'No Records found' }));
});

// @route POST api/records
// @description add/save record
// @access Public
router.post('/post', (req, res) => {
  console.log(req.body);
  Records.create(req.body)
    .then(record => res.json({ msg: 'record added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this record' }));
});

// @route GET api/records/:id
// @description Update record
// @access Public
router.put('/records/:id', (req, res) => {
  Records.findByIdAndUpdate(req.params.id, req.body)
    .then(record => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/records/:id
// @description Delete record by id
// @access Public
router.delete('/records/:id', (req, res) => {
  Records.findByIdAndDelete(req.params.id, req.body)
    .then(record => res.json({ mgs: 'Records entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a record' }));
});

module.exports = router;