let { http } = plugdo;

var getdata = "";
var DataJson;

function switchf()
{
  if (document.getElementById('id').value == "") {
   getUsers();
  }else{
    getUser();
  }
}

function getUser() {
  var id = document.getElementById('id').value;
  var DataJson;
  http({
    url: "api/id/user/json",
    method: "post",
    data: {
      id: id
    },
    cache: false
  })
    .done(function (data) {
      getdata = data.response.result.Database[0].Table.Row[0];
      
       console.log(getdata);
       DataJson=JSON.stringify(getdata);
       console.log(DataJson);
      document.getElementById("data").innerHTML="";
      document.getElementById("data").innerHTML=`
      <div class="col-md-4" >
      <div class="card border-dark mb-2 shadow" >
      <img class="card-img-top"  src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16e8e8360dc%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16e8e8360dc%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
        <div class="card-body">
          <h5 class="card-title">${getdata[0].est_Nombre_establecimiento}</h5>
          <p class="card-text">${getdata[0].est_Direccion}</p>
          <p class="card-subtitle mb-2 text-muted">Precio: $${getdata[0].est_Precio}.00</p>
          <a href="#" class="btn btn-primary">Ver Más..</a>
        </div>
     </div>
  
</div> `;
    });

}

function getUsers() {

  http({
    url: "api/id/user/json",
    cache: false
  })
    .done(function (data) {
      getdata = data.response.result.Database[0].Table.Row[0];
      // console.log(getdata);
      // document.getElementById("form").style.display='none';
      getdata.forEach(element => {
        document.getElementById("data").innerHTML += `
      <div class="col-md-4" >
      <div class="card border-dark mb-2 shadow" >
      <img class="card-img-top"  src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16e8e8360dc%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16e8e8360dc%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
        <div class="card-body">
          <h5 class="card-title">${element.est_Nombre_establecimiento}</h5>
          <p class="card-text">${element.est_Direccion}</p>
          <p class="card-subtitle mb-2 text-muted">Precio: $${element.est_Precio}.00</p>
          <a href="#" class="btn btn-primary">Ver Más..</a>
        </div>
     </div>
  
</div>
     `;
      });
      ;
      //  document.getElementById("direccion").innerHTML=getdata[0].est_Nombre_establecimiento;
      //  document.getElementById("precio").innerHTML=getdata[0].est_Precio;
    });

}

function GetValores()
{ return DataJson;}







// var dataobject = [];

// function myFunction()
// {

// var variable = document.getElementById("id").value;
// var miInit = { method: 'POST',
//                };

//                var url = 'api/establecimiento-id/json';
// var data = {id:variable};

// $.ajax({
//            type: "POST",
//            url: url,
//            data: data, // serializes the form's elements.
//            success: function(response)
//            {
//             dataobject=response
//            }
//          });

// }

// if(dataobject!="")
// {
// console.log(dataobject); // show response from the php script.
// }

// <!--<input type="text" id="id">
//         <button onclick="myFunction()">click</button>-->


// {
//   "titulo"="",
//   "card"=[
//        {
//         "titulo"="${getdata[0].est_Nombre_establecimiento}",
//         "direccion"="${getdata[0].est_Direccion}",
//         "precio"="${getdata.est_Precio}"
//         }
//       ]
// }