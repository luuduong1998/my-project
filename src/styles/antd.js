const colors = require("./style-values/colors.json");

const antdColorVariables = {
	"@primary-color": colors.primary,
	"@default-color": colors.primary,
	"@layout-sider-background": colors.sidebarGray,
	"@menu-collapsed-width": colors.menuCollapseWidth,
	"@menu-dark-bg": colors.sidebarGray,
	"@menu-dark-item-active-bg": colors.menuActiveBg,
	"@menu-dark-color": colors.menuGrayColor,
	"@menu-dark-highlight-color": colors.primary,
	"@layout-trigger-background": colors.sidebarGray,
	"@layout-trigger-color": colors.menuGrayColor,
	"@menu-dark-selected-item-text-color": colors.primary,
	"@menu-dark-selected-item-icon-color": colors.primary,
	"@result-title-font-size": colors.font14
};

module.exports = {
	...antdColorVariables,
};
