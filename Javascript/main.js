// The array of names of ALL the downloadables in the site.
var theNames = ["CGCollections_model_kitchen"];

function start()
{
    var MainDiv = document.getElementById("BULK");
    for (let ele = 0; ele < theNames.length; ele++) 
    {
        var name = theNames[ele];
        var theDiv = document.createElement("div"); theDiv.id = theNames[ele];
        var theBLENDA = document.createElement("a");
        var theFBXA = document.createElement("a");
        var theOBJA = document.createElement("a");
        var theBLENDButton = document.createElement("button");
        var theFBXButton = document.createElement("button");
        var theOBJButton = document.createElement("button");
        var theImage = document.createElement("img");
        
        try{
            theImage.src = "previews/" + name + ".jpg";
            theImage.alt = "preview unavailable...";
            theImage.loading = "eager";
            theImage.style = "position: relative; left: 0px;";
            theDiv.appendChild(theImage);
        } catch(error)
        {
            console.log(error);
        }
        // For the .blend files
        try{
            theBLENDButton.classList.add("hover_button");
            theBLENDButton.innerHTML = "DOWNLOAD .blend";
            theBLENDA.appendChild(theBLENDButton);
            theBLENDA.href = "downloadables\\BLEND\\" + name + ".blend";
            theBLENDA.download = "downloadables\\BLEND\\" + name + ".blend";
        } catch(error)
        {

        }
        // For the .fbx Files
        try
        {
            theFBXButton.classList.add("hover_button");
            theFBXButton.innerHTML = "DOWNLOAD .fbx";
            theFBXA.appendChild(theFBXButton);
            theFBXA.href = "downloadables\\FBX\\" + name + ".fbx";
            theFBXA.download = "downloadables\\FBX\\" + name + ".fbx";
        } catch(error)
        {

        }
        // For the .obj Files
        try
        {
            theOBJButton.classList.add("hover_button");
            theOBJButton.innerHTML = "DOWNLOAD .obj";
            theOBJA.appendChild(theOBJButton);
            theOBJA.href = "downloadables\\OBJ\\" + name + ".obj";
            theOBJA.download = "downloadables\\OBJ\\" + name + ".obj";
        } catch(error)
        {

        }
        var x = 300 * (ele + 1);
        theDiv.style = "position: absolute; left: ${x} px";
        theDiv.appendChild(theBLENDA);
        theDiv.appendChild(theFBXA);
        theDiv.appendChild(theOBJA);

        MainDiv.appendChild(theDiv);
    }
}
