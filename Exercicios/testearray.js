var vetor = ["é", "ç"]

var nome = "josé dos santos"

var arrayNome = nome.split("")

for (var i = 0; i < nome.length; i++)
{
    if(vetor.includes(arrayNome[i]))
    {
        console.log("tem no vetor")
        console.log(arrayNome[i])
    }

}

