// const { RegistrationConflictError, LoginAuthError } = require("./errors");

// const tryCatchWrapper = (controller) => {
//   return (req, res, next) => {
//     controller(req, res).catch(next);
//   };
// };

// const errorHandler = (err, req, res, next) => {
//   if (
//     err instanceof RegistrationConflictError ||
//     err instanceof LoginAuthError
//   ) {
//     return res.status(err.status).json({ message: err.message });
//   }
//   res.status(500).json({ message: err.message });
// };

// const registrationConflictError = (err, req, res, next) => {
//   res.status(409).json({ message: err.message });
// };

// module.exports = {
//   tryCatchWrapper,
//   errorHandler,
//   registrationConflictError,
// };