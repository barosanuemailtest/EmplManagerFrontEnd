const baseUrl = 'http://localhost:8080/';
const allEmployeesUrl = baseUrl + 'allemployees';
const juniorsUrl = baseUrl + 'juniors';
const programmersUrl = baseUrl + 'programmers';
const engineersUrl = baseUrl + 'engineers';
const expertsUrl = baseUrl + 'experts';
const managersUrl = baseUrl + 'managers';
const adminsUrl = baseUrl + 'admins';

function getAllEmployees() {
    getByUrl(allEmployeesUrl);
}
function getJuniors() {
    getByUrl(juniorsUrl);
}
function getProgrammers() {
    getByUrl(programmersUrl);
}
function getEngineers() {
    getByUrl(engineersUrl);
}
function getExperts() {
    getByUrl(expertsUrl);
}
function getManagers() {
    getByUrl(managersUrl);
}
function getAdmins() {
    getByUrl(adminsUrl);
}

function getByUrl(url) {
    const Http = new XMLHttpRequest();
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const text = formatResponse(url, Http.responseText);
            document.getElementById('employeesArea').innerHTML = text
        }
    }
}

function formatResponse(url, responseText) {
    var response = '';
    const tableHead = String(url).split('/').slice(-1).pop();
    response += "<table border='1'><th>" + tableHead + "</th>";
    employess = JSON.parse(responseText);
    console.log(employess);
    for (x in employess) {
        response += "<tr><td>" + employess[x].name + "</td></tr>";
    }
    response += "</table>";
    return response;
}
