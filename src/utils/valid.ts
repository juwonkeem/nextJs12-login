/**
 * valid.ts
 *  - Pattern and format checking.
 *
 * @author dencomm inc.
 * @version 1.0.0
 */

export const regx = {
  birth: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[0-9]{10,11}$/,
  email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  id: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:"<>?`\-=[\]\\;',./]).{8,20}$/,
}

export const validations = {
  isNumber: (param: any) => {
    return typeof param === 'number' && !isNaN(param)
  },
  isBirth: (param: string) => {
    return new RegExp(regx.birth).test(param)
  },
  isEmail: (param: string) => {
    return new RegExp(regx.email).test(param)
  },
  isId: (param: string) => {
    return new RegExp(regx.id).test(param)
  },
}
