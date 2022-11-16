function redirectforlogin() {
    const position = document.getElementById("position");

    if (position.value == "RECTORY TEAM") {
        location.href = "./rectory/HOMEcourse.html";
    } else {
        if (position.value == "COURSE COORDENATOR") {
            location.href = "./coordenator/HOMEcourse.html";
        } else {
            if (position.value == "TEACHER") {
                location.href = "./teacher/HOMEcourse.html";
            } else {
                if  (position.value == "STUDENT") {
                    location.href = "./student/HOMEcourse.html";
                } else {
                    alert("NÃO FOI POSSIVEL TE LOCALIZAR");
                    location.href = "./index.html";
                }
            }
        }
    }
}