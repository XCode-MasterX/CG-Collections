// The array of names of ALL the downloadables in the site.
var theNames = ["collections3D_model_kitchen"];

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
        var theBP = document.createElement("p"), theFBXP = document.createElement("p"), theOBJP = document.createElement("p");
    
        theImage.src = "preview\\" + name + "_preview.jpg";
        theImage.alt = "image unavailable...";

        // For the .blend files
        theBP.className = "text_style";
        theBP.innerHTML = "Download .blend";
        theBLENDButton.appendChild(theBP);
        theBLENDA.appendChild(theBLENDButton);
        theBLENDA.href = "downloadables\\BLEND\\" + name + ".blend";
        theBLENDA.download = "downloadables\\BLEND\\" + name + ".blend";
        
        // For the .fbx Files
        theFBXP.className = "text_style";
        theFBXP.innerHTML = "Download .fbx";
        theFBXButton.appendChild(theFBXP);
        theFBXA.appendChild(theFBXButton);
        theFBXA.href = "downloadables\\FBX\\" + name + ".fbx";
        theFBXA.download = "downloadables\\FBX\\" + name + ".fbx";
        
        // For the .obj Files
        theOBJP.className = "text_style";
        theOBJP.innerHTML = "Download .obj";
        theOBJButton.appendChild(theOBJP);
        theOBJA.appendChild(theOBJButton);
        theOBJA.href = "downloadables\\OBJ\\" + name + ".obj";
        theOBJA.download = "downloadables\\OBJ\\" + name + ".obj";
        
        theDiv.appendChild(theBLENDA);
        theDiv.appendChild(theFBXA);
        theDiv.appendChild(theOBJA);

        MainDiv.appendChild(theDiv);
    }
}