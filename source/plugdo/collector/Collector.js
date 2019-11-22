
var objectConnect = global.settings.db;

plugdo.collector("sqlserverGetInfo", {
    type: "db",
    action: "mysql",
    server: objectConnect,
    queryType: "stored-procedure",
    query: " call getEstabeclimiento",
    parameter: ['json:id']
});

plugdo.collector("MyqlserverGetInfo", {
    type: "db",
    action: "mysql",
    server: objectConnect,
    queryType: "stored-procedure",
    query: " call selectUser",
    parameter: []
});