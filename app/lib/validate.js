export function login_validate(values) {
    const errors = {}
 
    if (!values.email) {
       errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
       errors.email = 'Email address is invalid'
    }
 
    if (!values.password) {
       errors.password = 'Password is required'
    } else if (values.password.length < 6 || values.password.length > 20) {
       errors.password = 'Password needs to be between 6 and 20 characters'
    } else if (values.password.includes(' ')) {
       errors.password = 'Password cannot contain spaces'
    }
 
    return errors
 }
 
 export function register_validate(values) {
    const errors = {}
 
    if (!values.fname) {
       errors.fname = 'First name is required'
    } else if (values.fname.length < 2 || values.fname.length > 20) {
       errors.fname = 'First name needs to be between 2 and 20 characters'
    } else if (values.fname.includes(' ')) {
       errors.fname = 'First name cannot contain spaces'
    }
 
    if (!values.lname) {
       errors.lname = 'Last name is required'
    } else if (values.lname.length < 2 || values.lname.length > 20) {
       errors.lname = 'Last name needs to be between 2 and 20 characters'
    } else if (values.lname.includes(' ')) {
       errors.lname = 'Last name cannot contain spaces'
    }
 
    if (!values.email) {
       errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
       errors.email = 'Email address is invalid'
    }
 
    if (!values.password) {
       errors.password = 'Password is required'
    } else if (values.password.length < 6 || values.password.length > 20) {
       errors.password = 'Password needs to be between 6 and 20 characters'
    } else if (values.password.includes(' ')) {
       errors.password = 'Password cannot contain spaces'
    }
 
    if (!values.password2) {
       errors.password2 = 'Password is required'
    } else if (values.password2 !== values.password) {
       errors.password2 = 'Passwords do not match'
    }
 
    if (!values.acctype) {
       errors.acctype = 'Account type is required'
    }
 
    if (values.acctype === 'employee') {
       if (!values.managerEmail) {
          errors.managerEmail = 'Manager email is required'
       } else if (!/\S+@\S+\.\S+/.test(values.managerEmail)) {
          errors.managerEmail = 'Manager email address is invalid'
       }
    }
 
    return errors
 }
 