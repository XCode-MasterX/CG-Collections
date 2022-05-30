// The array of names of ALL the downloadables in the site.
var theNames = ["collections3D_model_kitchen"];

var defaultError = "error.txt";
var styling = "background-color: #C0C0C0; border-radius: 20px; border: 3px solid orangered; width: 200px; height: 50px;"

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
        
        try{
            theImage.src = "preview\\" + name + "_preview.jpg";
            theImage.alt = "image unavailable...";
        } catch(error)
        {
            console.log(error);
        }
        // For the .blend files
        try{
            theBP.className = "text_style";
            theBP.innerHTML = "Download .blend";
            theBLENDButton.appendChild(theBP);
            theBLENDButton.style = styling;
            theBLENDButton.classList.add("hover_button");
            theBLENDA.appendChild(theBLENDButton);
            theBLENDA.href = "downloadables\\BLEND\\" + name + ".blend";
            theBLENDA.download = "downloadables\\BLEND\\" + name + ".blend";
        } catch(error)
        {

        }
        // For the .fbx Files
        try{
            theFBXP.className = "text_style";
            theFBXP.innerHTML = "Download .fbx";
            theFBXButton.appendChild(theFBXP);
            theFBXButton.style = styling;
            theFBXButton.classList.add("hover_button");
            theFBXA.appendChild(theFBXButton);
            theFBXA.href = "downloadables\\FBX\\" + name + ".fbx";
            theFBXA.download = "downloadables\\FBX\\" + name + ".fbx";
        } catch(error)
        {

        }
        // For the .obj Files
        try{
            theOBJP.className = "text_style";
            theOBJP.innerHTML = "Download .obj";
            theOBJButton.appendChild(theOBJP);
            theOBJButton.style = styling;
            theOBJButton.classList.add("hover_button");
            theOBJA.appendChild(theOBJButton);
            theOBJA.href = "downloadables\\OBJ\\" + name + ".obj";
            theOBJA.download = "downloadables\\OBJ\\" + name + ".obj";
        } catch(error)
        {

        }
        theDiv.appendChild(theBLENDA);
        theDiv.appendChild(theFBXA);
        theDiv.appendChild(theOBJA);

        MainDiv.appendChild(theDiv);
    }
}