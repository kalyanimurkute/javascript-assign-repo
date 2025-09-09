 function showCurrentTime(){
        const hh = document.getElementById("hh");
        const mm = document.getElementById("mm");
        const ss = document.getElementById("ss");

        const date = new Date();
        hh.innerHTML = date.getHours();
        mm.innerHTML = date.getMinutes();
        ss.innerHTML = date.getSeconds();


    }
    setInterval(showCurrentTime,1000);
