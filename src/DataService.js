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
    Http.onreadystatechange = () => {
        const text = formatResponse(url, Http.responseText);
        document.getElementById('employeesArea').innerHTML = text
    }
}

function formatResponse(url, responseText) {
    const tableHead = String(url).split('/').slice(-1).pop();
    return tableHead;
}
