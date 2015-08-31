import UserMenuComponent from 'discourse/components/user-menu';

export default {
    name: 'logout-menu-item',
    initialize: function() {
        UserMenuComponent.reopen({
            actions: {
                logout() {
                    Discourse.User.logout();
                }
            }
        });
    }
};
