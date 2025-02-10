const {check , validationResult} =  require ('express-validator');

const validateCreateDepartment = [
    check('name')
         .notEmpty().withMessage('department name require')
         .isLength({max: 100}).withMessage('Department name must be less than 100 character'),
    check('description')
        .isLength({max: 200}).withMessage('Description must be less than 200'),
    
        (req, res, next) => {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()});
            }
            next();
        }
];
const validateUpdateDepartment = [ 
    check ('name')
        .optional()
        .isLength({max : 100}).withMessage('Department name must be less than 100 charaters'),
];
const validateDepartmentId = [
    check ('departmentId')
        .trim()
        .isInt().withMessage ('Invalid department ID format')
        .notEmpty().withMessage('Department id require'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
];

module.exports = {
    validateCreateDepartment,
    validateUpdateDepartment,
    validateDepartmentId

}