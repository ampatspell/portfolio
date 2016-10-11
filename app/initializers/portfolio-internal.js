export default {
  name: 'portfolio:internal',
  initialize(container) {
    container.registerOptionsForType('services/backend-navigation/item', { instantiate: false });
  }
}
