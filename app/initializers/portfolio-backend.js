export default {
  name: 'portfolio:backend',
  initialize(container) {
    container.registerOptionsForType('services/backend/navigation-item', { instantiate: false });
    container.registerOptionsForType('services/backend/gallery-type', { instantiate: false });
    container.registerOptionsForType('services/backend/section', { instantiate: false });
  }
};
