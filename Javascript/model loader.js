// The array of names of ALL the downloadables in the site.
var theNames = [
    {"name" : "Kitchen",
     "type" : "model",
     "size" : "100KB"}
];

function start()
{
    var MainDiv = document.getElementById("BULK");
    for (let ele = 0; ele < theNames.length; ele++) 
    {
        var object = theNames[ele];
        var name = object["name"].toLowerCase();
        var theDiv = document.createElement("div"), theSubDiv = document.createElement("div"); 
        theDiv.id = name;
        theDiv.style = "float: left; border: 3px solid rgb(219, 123, 55); border-radius: 10px; margin-top: 4px; margin-bottom: 4px; width: 850px;"
        var theBLENDA = document.createElement("a");
        var theFBXA = document.createElement("a");
        var theOBJA = document.createElement("a");
        var theBLENDButton = document.createElement("button");
        var theFBXButton = document.createElement("button");
        var theOBJButton = document.createElement("button");
        var theMVB = document.createElement("button");
        var theMVBA = document.createElement("a");
        var theImage = document.createElement("img");
        var theP = document.createElement("p");

        theP.innerHTML = object['name'] + "<br>" + "SIZE: " + object["size"];
        theP.style = "margin: 10px;";
        theSubDiv.appendChild(theP);
        try{
            theImage.src = "previews/CGCollections_models" + name + "_previews.jpg";
            theImage.style = "position: relative; left: 3px; height: 200px; width: 300px;";
            theDiv.appendChild(theImage);
        } catch(error){}
        // For the .blend files
        try{
            theBLENDButton.classList.add("hover_button");
            theBLENDButton.innerHTML = "DOWNLOAD .blend";
            theBLENDA.appendChild(theBLENDButton);
            theBLENDA.href = "model downloadables\\BLEND\\" + name + ".blend";
            theBLENDA.download = "model downloadables\\BLEND\\" + name + ".blend";
        } catch(error){}
        // For the .fbx Files
        try
        {
            theFBXButton.classList.add("hover_button");
            theFBXButton.innerHTML = "DOWNLOAD .fbx";
            theFBXA.appendChild(theFBXButton);
            theFBXA.href = "model downloadables\\FBX\\" + name + ".fbx";
            theFBXA.download = "model downloadables\\FBX\\" + name + ".fbx";
        } catch(error){}
        // For the .obj Files
        try
        {
            theOBJButton.classList.add("hover_button");
            theOBJButton.innerHTML = "DOWNLOAD .obj";
            theOBJA.appendChild(theOBJButton);
            theOBJA.href = "model downloadables\\OBJ\\" + name + ".obj";
            theOBJA.download = "model downloadables\\OBJ\\" + name + ".obj";
            //theOBJA.style = "position: relative; top: 45px; left: -330px;"
        } catch(error){}
        theMVB.addEventListener("click", function() 
        {
            localStorage.setItem("model-name", object['name']);
        });
        theMVB.innerHTML = "View model in 3D";
        theMVB.classList.add("hover_button");
        theMVBA.appendChild(theMVB);
        theMVBA.href = "model_viewing.html";
        theSubDiv.appendChild(theBLENDA);
        theSubDiv.appendChild(theFBXA);
        theSubDiv.appendChild(document.createElement("br"));
        theSubDiv.appendChild(theOBJA);
        theSubDiv.appendChild(theMVBA);
        theSubDiv.style = "float: right; position: relative; left: -50px; width: 480px;";
        theDiv.appendChild(theSubDiv);

        MainDiv.appendChild(theDiv);
    }
}