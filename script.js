let currentMessage = 0;

const messages = [

`Halo, Agent Wiarnatzy.

Selamat datang di Level 20.

Hari ini bukan sekadar pergantian angka, tetapi awal dari chapter baru yang akan kamu jalani.`,

`Di sepanjang perjalananmu sampai hari ini, pasti ada banyak hal yang sudah kamu lewati.

Ada hari yang menyenangkan.
Ada hari yang melelahkan.

Namun sejauh ini, kamu berhasil sampai di titik ini.`,

`Kalau suatu saat semuanya terasa berat, jangan lupa untuk beristirahat.

Tidak apa-apa berjalan pelan.

Tidak apa-apa jika belum semuanya sesuai harapan.`,

`Terima kasih sudah menjadi dirimu sendiri.

Terima kasih atas tawa, cerita, dan kenangan yang pernah dibagikan.`,

`Selamat ulang tahun.

Semoga Level 20 membawa lebih banyak kebahagiaan, kesempatan, dan cerita baik untukmu.`
];
const skyeImages = [

"images/skye1.png",
"images/skye2.png",
"images/skye3.png",
"images/skye4.png",
"images/skye5.png"

];
let loadingStarted = false;

function startTejoScene(){

    document.getElementById(
        "logo-scene"
    ).style.display = "none";

    document.getElementById(
        "tejo-scene"
    ).style.display = "flex";

    setTimeout(() => {

        const tejo =
        document.getElementById("tejo");

        tejo.style.opacity = "1";

        tejo.style.transform =
        "translateX(0px)";

    },200);

    setTimeout(() => {

        document.getElementById(
            "scan-title"
        ).innerHTML =
        "SEARCHING AGENT...";

    },2500);

    setTimeout(() => {

    document.getElementById(
        "scan-title"
    ).innerHTML =
    "MATCH FOUND";

    document.getElementById(
        "match-sfx"
    ).currentTime = 0;

    document.getElementById(
        "match-sfx"
    ).play();

},5000);

    setTimeout(() => {

    document.getElementById(
        "scan-title"
    ).innerHTML =
    "AGENT DETECTED";

    document.getElementById(
        "scan-status"
    ).innerHTML =
    "TARGET IDENTIFIED";

},6500);

setTimeout(() => {

    showAgentScene();

},8500);

}
function showAgentScene(){

    document.getElementById(
        "scan-title"
    ).innerHTML =
    "ACCESSING PROFILE...";

    document.getElementById(
        "scan-status"
    ).innerHTML =
    "PLEASE WAIT";

    document.body.classList.add(
        "glitch-screen"
    );

    setTimeout(() => {

        document.body.classList.remove(
            "glitch-screen"
        );

        document.getElementById(
            "tejo-scene"
        ).style.display = "none";

        document.getElementById(
            "agent-scene"
        ).style.display = "flex";
        document.getElementById(
    "scan-sfx"
).play();
        setTimeout(() => {

    showBriefingScene();

},5000);

    },600);

}
function showBriefingScene(){

    document.getElementById(
        "agent-scene"
    ).style.display = "none";

    document.getElementById(
        "briefing-scene"
    ).style.display = "flex";

    const objectives =
    document.querySelectorAll(
        ".objective"
    );

    objectives.forEach(
        (obj,index) => {

        setTimeout(() => {

            obj.style.opacity = "1";
            document.getElementById(
    "click-sfx"
).currentTime = 0;

document.getElementById(
    "click-sfx"
).play();

        },index * 800);

    });

    setTimeout(() => {

        document.getElementById(
            "lockin-btn"
        ).style.display =
        "block";

    },4500);

}
function showAcceptedScene(){

    document.getElementById(
        "briefing-scene"
    ).style.display = "none";

    document.getElementById(
        "accepted-scene"
    ).style.display = "flex";

    setTimeout(() => {

        document.getElementById(
            "accepted-scene"
        ).style.display = "none";

        document.getElementById(
            "level-scene"
        ).style.display = "flex";

        typeWriter(
            document.getElementById(
                "level-text"
            ),
            "LEVEL 19 COMPLETE"
        );

    },2000);

    setTimeout(() => {

        typeWriter(
            document.getElementById(
                "level-text"
            ),
            "LEVEL 20 BEGINS"
        );

    },4500);

    setTimeout(() => {

        document.getElementById(
            "level-scene"
        ).style.display = "none";

        document.getElementById(
            "mission-detected-scene"
        ).style.display = "flex";

        typeWriter(
            document.getElementById(
                "mission-text"
            ),
            "NEW MISSION DETECTED"
        );

    },7500);

    setTimeout(() => {

        document.getElementById(
            "target-text"
        ).style.opacity = "1";

        typeWriter(
            document.getElementById(
                "target-text"
            ),
            "TARGET : WIARNATZY"
        );

    },9800);

    setTimeout(() => {

    document.getElementById(
        "flash-screen"
    ).classList.add(
        "flash-active"
    );

},11800);

setTimeout(() => {

    document.getElementById(
        "flash-screen"
    ).classList.remove(
        "flash-active"
    );

    document.getElementById(
        "mission-detected-scene"
    ).style.display = "none";

    document.getElementById(
        "birthday-scene"
    ).style.display = "flex";

    const bgm =
document.getElementById(
    "bgm"
);

bgm.volume = 0.05;

document.getElementById(
    "birthday-sfx"
).play();

},12300);

}
function showMessageScene(){

    document.getElementById(
        "birthday-scene"
    ).style.display = "none";

    document.getElementById(
        "message-scene"
    ).style.display = "flex";

    document.getElementById(
    "message-skye"
).src =
skyeImages[0];
typeWriter(

    document.getElementById(
        "message-content"
    ),

    messages[0],

    20

);

}
let typingInterval;

function typeWriter(
    element,
    text,
    speed = 40
){

    element.innerHTML = "";

    let i = 0;

    function type(){

        if(
            i < text.length
        ){

            element.innerHTML +=
            text.charAt(i);

            if(
                i % 2 === 0 &&
                text.charAt(i) !== " "
            ){

                document.getElementById(
                    "typewriter-sfx"
                ).currentTime = 0;

                document.getElementById(
                    "typewriter-sfx"
                ).play();

            }

            i++;

            setTimeout(
                type,
                speed
            );

        }

    }

    type();

}

            
function showLogoScene(){

    document.getElementById(
        "landscape-screen"
    ).style.display = "none";

    document.getElementById(
        "logo-scene"
    ).style.display = "flex";

    setTimeout(() => {

        startTejoScene();

    },3000);

}

function startLoading(){

    if(loadingStarted) return;

    loadingStarted = true;

    let fill =
    document.querySelector(".loading-fill");

    let text =
    document.getElementById("loading-text");

    let progress = 0;

    let interval =
    setInterval(() => {

        progress++;

        fill.style.width =
        progress + "%";

        text.innerHTML =
        progress + "%";

        if(progress >= 100){

            clearInterval(interval);

            document.getElementById(
                "system-title"
            ).innerHTML =
            "RIOT PROTOCOL ACTIVATED";

            text.innerHTML =
            "SYSTEM ONLINE";

            setTimeout(() => {

                showLogoScene();

            },1500);

        }

    },40);
}

function checkOrientation(){

    if(
        window.innerWidth >
        window.innerHeight
    ){

        document.getElementById(
    "rotate-screen"
).style.display = "none";

document.getElementById(
    "start-screen"
).style.display = "flex";

    }

    else{

        document.getElementById(
            "rotate-screen"
        ).style.display = "flex";

        document.getElementById(
            "landscape-screen"
        ).style.display = "none";

        document.getElementById(
            "logo-scene"
        ).style.display = "none";

        document.getElementById(
            "tejo-scene"
        ).style.display = "none";
    }
}
document.addEventListener(
    "click",
    function(e){

        if(
    e.target.id ===
    "lockin-btn"
){
    document.getElementById(
    "click-sfx"
).play();

    const bgm =
    document.getElementById(
        "bgm"
    );

    bgm.volume = 0.3;

    bgm.play();

    showAcceptedScene();

}

    }
);
window.addEventListener(
    "resize",
    checkOrientation
);

checkOrientation();
document.getElementById(
    "message-btn"
).addEventListener(
    "click",
    function(){

        document.getElementById(
            "click-sfx"
        ).play();

        showMessageScene();

    }
);
document.getElementById(
    "continue-btn"
).addEventListener(
    "click",
    function(){
document.getElementById(
    "click-sfx"
).currentTime = 0;

document.getElementById(
    "click-sfx"
).play();
        currentMessage++;

        if(
            currentMessage <
            messages.length
        ){

            document.getElementById(
                "message-title"
            ).innerHTML =
            "MESSAGE FILE 0" +
            (currentMessage + 1);

            typeWriter(

    document.getElementById(
        "message-content"
    ),

    messages[currentMessage],

    20

);

            const skye =
document.getElementById(
    "message-skye"
);

skye.classList.add(
    "skye-glitch"
);

setTimeout(() => {

    skye.src =
    skyeImages[currentMessage];

    skye.classList.remove(
        "skye-glitch"
    );

},200);

        }

        else{

            document.getElementById(
                "message-title"
            ).innerHTML =
            "END OF TRANSMISSION";

            document.getElementById(
                "message-content"
            ).innerHTML =
            `This concludes the message
from Agent Julian
to Agent Wiarnatzy.

Good luck on your next mission.`;

            document.getElementById(
                "continue-btn"
            ).innerHTML =
            "OPEN LETTER";

        }

    }
);
document.getElementById(
    "continue-btn"
).addEventListener(
    "click",
    function(){

        if(
            this.innerHTML ===
            "OPEN LETTER"
        ){

            document.getElementById(
                "message-scene"
            ).style.display =
            "none";

            document.getElementById(
                "letter-scene"
            ).style.display =
            "flex";
        }

    }
);
document.getElementById(
    "open-letter-btn"
).addEventListener(
    "click",
    function(){
document.getElementById(
    "click-sfx"
).play();
        document.getElementById(
            "letter-scene"
        ).style.display =
        "none";

        document.getElementById(
            "letter-content-scene"
        ).style.display =
        "flex";

    }
);
document.getElementById(
    "identify-btn"
).addEventListener(
    "click",
    function(){
document.getElementById(
    "click-sfx"
).play();
        document.getElementById(
            "letter-content-scene"
        ).style.display =
        "none";

        document.getElementById(
            "identity-scene"
        ).style.display =
        "flex";

        const photo =
        document.getElementById(
            "julian-photo"
        );

        const status =
        document.getElementById(
            "identity-status"
        );

        status.innerHTML =
        "ACCESSING DATABASE...";

        setTimeout(() => {

            status.innerHTML =
            "SEARCHING AGENT...";

        },1000);

        setTimeout(() => {

            status.innerHTML =
            "RENDERING PROFILE...";

        },2000);

        setTimeout(() => {

    document.getElementById(
        "scan-sfx"
    ).currentTime = 0;

    document.getElementById(
        "scan-sfx"
    ).play();

    photo.style.opacity =
    "1";

    photo.style.filter =
    "blur(0px)";

},2500);

        setTimeout(() => {

            status.innerHTML =
            "IDENTITY CONFIRMED";

        },4500);

    }
);
document.getElementById(
    "records-btn"
).addEventListener(
    "click",
    function(){
document.getElementById(
    "click-sfx"
).play();
        const bgm =
document.getElementById(
    "bgm"
);

document.querySelectorAll(
    "button"
).forEach(button => {

    button.addEventListener(
        "click",
        function(){

            document.getElementById(
                "click-sfx"
            ).currentTime = 0;

            document.getElementById(
                "click-sfx"
            ).play();

        }
    );

});

bgm.pause();
bgm.currentTime = 0;

const birthday =
document.getElementById(
    "birthday-sfx"
);

birthday.pause();
birthday.currentTime = 0;

        document.getElementById(
            "identity-scene"
        ).style.display =
        "none";

        document.getElementById(
            "records-scene"
        ).style.display =
        "flex";

    }
);
document.getElementById(
    "mission-video"
).addEventListener(
    "ended",
    function(){

        document.getElementById(
            "records-scene"
        ).style.display =
        "none";

        document.getElementById(
            "ending-scene"
        ).style.display =
        "flex";
        setTimeout(() => {

    document.getElementById(
        "rankup-sfx"
    ).play();

},300);

    }
);
document.getElementById(
    "start-btn"
).addEventListener(
    "click",
    function(){

        document.getElementById(
            "click-sfx"
        ).play();

        document.getElementById(
            "start-screen"
        ).style.display =
        "none";

        document.getElementById(
            "landscape-screen"
        ).style.display =
        "flex";

        startLoading();

    }
);