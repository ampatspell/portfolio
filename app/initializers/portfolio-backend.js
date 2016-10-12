export default {
  name: 'portfolio:backend',
  initialize(container) {
    container.registerOptionsForType('services/backend/navigation-item', { instantiate: false });
  }
};
