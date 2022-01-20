let urlTeams = 'https://api.football-data.org/v2/competitions/2002/teams'

fetch(urlTeams,{
    method:"GET",
    headers: {
        "x-auth-token":"36324f39828e4653bbc958fabb8338be"
    }
})

.then(response => response.json())
.then(function (data){
    html = "";
    data.teams.forEach(element => {
        html += "<ul><li><img height='50px' src='" + element.crestUrl + "'/>" + "</li>";
        html += "<li>"+ element.clubColors + "</li>";
        html += "<li>"+ element.name + "</li></ul>";
        html += "______________________________________________________<br><br>"

    });
    document.getElementById("teams").innerHTML = html;
})
