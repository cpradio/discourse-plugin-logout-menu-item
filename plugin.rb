# name: discourse-logout-menu-item
# about: Add a logout link to the hamburger menu
# version: 0.1
# authors: Matthew Wilkin
# url: https://github.com/cpradio/discourse-logout-menu-item

enabled_site_setting :discourse_logout_menu_item_enabled

register_asset "javascripts/discourse/connectors/site-map-links-last/logout-menu-item.hbs"
register_asset "javascripts/discourse/components/logout-menu-item.js.es6"
register_asset "javascripts/discourse/templates/logout-menu-item.hbs"