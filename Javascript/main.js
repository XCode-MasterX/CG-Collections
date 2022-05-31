// The array of names of ALL the downloadables in the site.
var theNames = [
    {"name" : "CGCollections_model_kitchen",
     "size" : "100KB"}
];
var f = new FileReader();

function start()
{
    var MainDiv = document.getElementById("BULK");
    for (let ele = 0; ele < theNames.length; ele++) 
    {
        var object = theNames[ele];
        var name = object["name"];
        var theDiv = document.createElement("div"), theSubDiv = document.createElement("div"); 
        theDiv.id = name;
        theDiv.style = "float: left; margin-top: 4px; margin-bottom: 4px;"
        var theBLENDA = document.createElement("a");
        var theFBXA = document.createElement("a");
        var theOBJA = document.createElement("a");
        var theBLENDButton = document.createElement("button");
        var theFBXButton = document.createElement("button");
        var theOBJButton = document.createElement("button");
        var theImage = document.createElement("img");
        var theP = document.createElement("p");

        theP.innerHTML = name + "<br>" + "SIZE: " + object["size"];
        theP.style = "margin: 10px;"
        theSubDiv.appendChild(theP);
        try{
            theImage.src = "previews/" + name + "_preview.jpg";
            theImage.alt = "preview unavailable...";
            theImage.style = "position: relative; left: 0px; height: 200px; width: 300px;";
            theDiv.appendChild(theImage);
        } catch(error){}
        // For the .blend files
        try{
            theBLENDButton.classList.add("hover_button");
            theBLENDButton.innerHTML = "DOWNLOAD .blend";
            theBLENDA.appendChild(theBLENDButton);
            theBLENDA.href = "downloadables\\BLEND\\" + name + ".blend";
            theBLENDA.download = "downloadables\\BLEND\\" + name + ".blend";
        } catch(error){}
        // For the .fbx Files
        try
        {
            theFBXButton.classList.add("hover_button");
            theFBXButton.innerHTML = "DOWNLOAD .fbx";
            theFBXA.appendChild(theFBXButton);
            theFBXA.href = "downloadables\\FBX\\" + name + ".fbx";
            theFBXA.download = "downloadables\\FBX\\" + name + ".fbx";
        } catch(error){}
        // For the .obj Files
        try
        {
            theOBJButton.classList.add("hover_button");
            theOBJButton.innerHTML = "DOWNLOAD .obj";
            theOBJA.appendChild(theOBJButton);
            theOBJA.href = "downloadables\\OBJ\\" + name + ".obj";
            theOBJA.download = "downloadables\\OBJ\\" + name + ".obj";
            theOBJA.style = "position: relative; top: 45px; left: -330px;"
        } catch(error){}

        theSubDiv.appendChild(theBLENDA);
        theSubDiv.appendChild(theFBXA);
        theSubDiv.appendChild(theOBJA);
        theSubDiv.style = "float: right;";
        theDiv.appendChild(theSubDiv);

        MainDiv.appendChild(theDiv);
    }
}