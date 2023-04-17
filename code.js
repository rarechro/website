

function classcheck() {

    mainpagecontent = document.getElementsByTagName("section");
    console.log(mainpagecontent);



}






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

function createSocialTable() {
    // create table element
    var socialTable = document.createElement("table");
    socialTable.setAttribute("style", "width:30%; height:30%; border: 1px solid black; border-collapse: collapse; text-align: center; margin: auto;");
    
    // create table row element
    var socialRow = document.createElement("tr");

    // create table data elements
    var facebookCell = document.createElement("td");
    var twitterCell = document.createElement("td");
    var instagramCell = document.createElement("td");

    // create social media icons
    var facebookIcon = document.createElement("a");
    facebookIcon.setAttribute("href", "https://www.facebook.com/");
    facebookIcon.setAttribute("target", "_blank");
    var facebookIconImage = document.createElement("img");
    facebookIconImage.setAttribute("src", "images/facebook.png");
    facebookIconImage.setAttribute("alt", "Facebook Icon");

    facebookIcon.appendChild(facebookIconImage);

    var twitterIcon = document.createElement("a");
    twitterIcon.setAttribute("href", "https://www.linkedin.com/");
    twitterIcon.setAttribute("target", "_blank");
    var twitterIconImage = document.createElement("img");
    twitterIconImage.setAttribute("src", "images/linkedin.png");
    twitterIconImage.setAttribute("alt", "Twitter Icon");
    twitterIcon.appendChild(twitterIconImage);

    var instagramIcon = document.createElement("a");
    instagramIcon.setAttribute("href", "https://www.instagram.com/");
    instagramIcon.setAttribute("target", "_blank");
    var instagramIconImage = document.createElement("img");
    instagramIconImage.setAttribute("src", "images/instagram.png");
    instagramIconImage.setAttribute("alt", "Instagram Icon");
    instagramIcon.appendChild(instagramIconImage);

    // append social media icons to table data elements
    facebookCell.appendChild(facebookIcon);
    twitterCell.appendChild(twitterIcon);
    instagramCell.appendChild(instagramIcon);

    // append table data elements to table row
    socialRow.appendChild(facebookCell);
    socialRow.appendChild(twitterCell);
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
