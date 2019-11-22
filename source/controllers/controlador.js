mvc.controller({
    name: "home",
    action: "index",
    path:""
}, function (req) {
    return {};
});

mvc.controller({
    name: "view",
    action: "menu",
    path:"/menu",
    view:"navbar.ejs"
}, function (req) {
    return {};
});

mvc.controller({
    name: "home",
    action: "formulario",
    path:"/formulario",
    view:"home/formulario.ejs"
}, function (req) {
    return {};
});

mvc.controller({
    name: "home",
    action: "usuario",
    path:"/usu",
    view:"home/Usuarios.ejs"
}, function (req) {
    return {};
});