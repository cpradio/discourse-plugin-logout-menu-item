import HamburgerMenuComponent from 'discourse/components/hamburger-menu';

export default {
    name: 'logout-menu-item',
    initialize: function() {
        HamburgerMenuComponent.reopen({
            actions: {
                logout() {
                    Discourse.User.logout();
                }
            }
        });
    }
};
