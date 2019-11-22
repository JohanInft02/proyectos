mvc.api({
    name: "id",
    action: "user",
    methods: {
        post: getAllUser
    }
}, "userService", getAllUser2);

function getAllUser(req, userService, send) {
    // console.log(req)

    var message = {
        id: req.plugdo.post.id
    }
    console.log(message)
    let response = {};
    plugdo.collect("sqlserverGetInfo").get(message, function (data, err) {
        if (err) {
            send({}, err)
        } else {
            response.result = data;
            send(response)
        }
    })
}

function getAllUser2(req, userService, send) {
     console.log(req)
var message="";
    console.log(message)
    let response = {};
    plugdo.collect("MyqlserverGetInfo").get(message, function (data2, err) {
        if (err) {
            send({}, err)
        } else {
            response.result = data2;
            send(response)
        }

         console.log(response)

    })
}



