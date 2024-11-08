
/*
* Note:
* Since we are using freeApi, data base is reset every 30mins.
* This is a valid form as long as you register with VALID_REGISTRATION_FORM.
* */
export const VALID_LOGIN_FORM = {
  username: 'mohi1',
  password: 'mohi'
}

export const WRONG_CREDENTIALS_FORM = {
  username: 'invalid_username',
  password: 'invalid_password'
}

export const INVALID_LOGIN_FORM = {
  username: 'invalid username',
  password: ''
}

export const VALID_REGISTER_FORM = {
  username: 'mohi1',
  password: 'mohi',
  email: 'mohlaroyimraupova99@gmail.com',
  role: 'ADMIN'
}
