
/*
1. Create
/ministries --> HTTP Verb--> Post

2. Delete
/ministries/:ID --> HTTP Verb--> Delete

3. Update
/ministries/:ID --> HTTP Verb--> Put

4. Get By ID
/ministries/:ID --> HTTP Verb--> Get

4. Get All
/ministries/ --> HTTP Verb--> Get

*/
const express = require('express');
const router = express.Router();
const { 
  createMinistry, 
  deleteMinistry, 
  getMinistries, 
  getMinistryById, 
  updateMinistry 
} = require('../controllers/ministryController');
const { 
  validateCreateMinistry, 
  validateUpdateMinistry, 
  validateMinistryId 
} = require('../validation/ministryValidation');

router.post('/', validateCreateMinistry, createMinistry);
router.delete('/:ministryId', validateMinistryId, deleteMinistry);
router.put('/:ministryId', validateMinistryId, validateUpdateMinistry, updateMinistry);
router.get('/:ministryId', validateMinistryId, getMinistryById);
router.get('/', getMinistries);

module.exports = router;
