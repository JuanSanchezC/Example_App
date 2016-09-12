import Ember from 'ember';

const spyTypes = [
  'Espía'
];
export function contractSpyType([type]/*, hash*/) {
  if (spyTypes.contains(type)) {
    return 'Conoce la verdad';
  }
  return 'Liberate de tus enemigos';
}
export default Ember.Helper.helper(contractSpyType);
