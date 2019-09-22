/**
 * Created by vivalaakam on 22.09.2019.
 *
 * @flow
 */
export default function validate(form) {
  if (form.username.length < 1) {
    return false;
  }

  if (form.password.length < 6) {
    return false;
  }

  if (typeof form.confirm !== 'undefined' && form.confirm !== form.password) {
    return false;
  }

  return true;
}
