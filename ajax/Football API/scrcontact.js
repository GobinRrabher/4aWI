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
        html += "<ul><li>" + element.address + "</li>";
        html += "<li>"+ element.phone + "</li>";
        html += "<li>"+ element.website + "</li>";
        html += "<li>"+ element.email + "</li></ul>";
        html += "______________________________________________________<br><br>"

    });
    document.getElementById("contact").innerHTML = html;
})
