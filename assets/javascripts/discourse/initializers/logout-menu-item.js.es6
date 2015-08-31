import UserMenuComponent from 'discourse/components/user-menu';
import User from 'discourse/models/user';

export default {
  name: 'logout-menu-item',
  initialize: function() {
    UserMenuComponent.reopen({
      actions: {
        logout() {
          User.logout();
        }
      }
    });
  }
};
