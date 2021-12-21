
let urlTeams = 'https://api.football-data.org/v2/competitions/2002/teams'

fetch(urlTeams,{
    method:"GET",
    headers: {
        "x-auth-token":"36324f39828e4653bbc958fabb8338be"
    }
})

.then(response => response.json())
.then(function (data){
    let html="";
    data.teams.forEach(element => {
        html += "<li><img height='100px' src='" + element.crestUrl + "'/>" + element.name + "</li>";

    });
    document.getElementById("teams").innerHTML = html;
})
