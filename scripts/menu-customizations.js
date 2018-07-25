// Append a new primary nav item.  This is a simple direct navigation item
// with no secondary menu.
window.OPENSHIFT_CONSTANTS.PROJECT_NAVIGATION.push({
  label: "Dashboard",           // The text label
  iconClass: "fa fa-dashboard", // The icon you want to appear
  href: "/dashboard"            // Where to go when this nav item is clicked.
                                // Relative URLs are pre-pended with the path
                                // '/project/<project-name>'
});

