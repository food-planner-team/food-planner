import Joi from 'joi'
import validationErrorHandler from './validationErrorHandler'

export default (schema, data) => {
  try {
    // let unknown properies pass
    Joi.assert(data, schema, { stripUnknown: true })
  } catch (error) {
    throw validationErrorHandler(error)
  }
}
