
// checking class of main page content... not working
function classcheck() {

    mainpagecontent = document.getElementsByTagName("section");
    console.log(mainpagecontent);



}





//testing
function createAboutTable() {
    var text = document.getElementById("aboutText");
    console.log(text);
    var aboutTable = document.createElement("table");
    aboutTable.setAttribute("id", "aboutTable");
    aboutTable.setAttribute("class", "aboutTable");
    aboutTable.setAttribute("style", "width:30%");
    aboutTable.setAttribute("style", "border: 1px solid black");
    aboutTable.setAttribute("style", "border-collapse: collapse");
    aboutTable.setAttribute("style", "text-align: center");
    aboutTable.setAttribute("style", "margin: auto");
    aboutTable.createElement("tr");
    aboutTable.tr.textContent = "text";
    document.body.appendChild(aboutTable);

}



// builds and appends a social media table to the body of the page
function createSocialTable() {
    // create table element
    var socialTable = document.createElement("table");
    socialTable.setAttribute("style", "width:30%; height:30%; border: 1px solid black; border-collapse: collapse; text-align: center; margin: auto; background-color: #f1f1c1;");
    
    // create table row element
    var socialRow = document.createElement("tr");

    // create table data elements
    var facebookCell = document.createElement("td");
    var linkedinCell = document.createElement("td");
    var instagramCell = document.createElement("td");

    // create social media icons
    var facebookIcon = document.createElement("a");
    facebookIcon.setAttribute("href", "https://www.facebook.com/");
    facebookIcon.setAttribute("target", "_blank");
    var facebookIconImage = document.createElement("img");
    facebookIconImage.setAttribute("src", "images/facebook-removebg-preview.png");
    facebookIconImage.setAttribute("alt", "Facebook Icon");
    facebookIconImage.style.width = "75px";
    facebookIconImage.style.height = "75px";

    facebookIcon.appendChild(facebookIconImage);

    var linkedinIcon = document.createElement("a");
    linkedinIcon.setAttribute("href", "https://www.linkedin.com/");
    linkedinIcon.setAttribute("target", "_blank");
    var linkedinIconImage = document.createElement("img");
    linkedinIconImage.setAttribute("src", "images/linkedin-removebg-preview.png");
    linkedinIconImage.setAttribute("alt", "Twitter Icon");
    linkedinIconImage.style.width = "75px";
    linkedinIconImage.style.height = "75px";
    linkedinIcon.appendChild(linkedinIconImage);

    var instagramIcon = document.createElement("a");
    instagramIcon.setAttribute("href", "https://www.instagram.com/");
    instagramIcon.setAttribute("target", "_blank");
    var instagramIconImage = document.createElement("img");
    instagramIconImage.setAttribute("src", "images/instagram-removebg-preview.png");
    instagramIconImage.setAttribute("alt", "Instagram Icon");
    instagramIconImage.style.width = "75px";
    instagramIconImage.style.height = "75px";
    instagramIcon.appendChild(instagramIconImage);

    // append social media icons to table data elements
    facebookCell.appendChild(facebookIcon);
    linkedinCell.appendChild(linkedinIcon);
    instagramCell.appendChild(instagramIcon);

    // append table data elements to table row
    socialRow.appendChild(facebookCell);
    socialRow.appendChild(linkedinCell);
    socialRow.appendChild(instagramCell);

    // append table row to table
    socialTable.appendChild(socialRow);
    
    // append table to document body if it exists
    var body = document.querySelector("body");
    if (body) {
        body.appendChild(socialTable);
    }
}

function main() {
    createSocialTable();
}

window.onload = function() {
    main();
};
