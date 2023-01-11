
var waitbg, bg;
var gamestate = "wait"
var main, m1, m2, m3, m4, m5, b1, b2, b3, b4, b5, bs, ms

var settings = {
    music: null,
    volume: null,
    vol: {
        volume: 0.5,
        buttons: {
            plus: null,
            minu: null,
        }
    },

    mus: {
        volume: 0,
        buttons: {
            plus: null,
            minu: null,
        }
    }
}

function preload() {
    waitbg = loadImage("Untitled design.gif")
    waitbg = loadImage("bg12.png")
    m1 = loadSound("musics/stylish-rock-beat-trailer-116346.mp3")
    m2 = loadSound("musics/asian-cinematic-122770.mp3")
    m3 = loadSound("musics/one-croquette-riddim-127848.mp3")
    m4 = loadSound("musics/indian-music-with-sitar-tanpura-and-sarangi-74577.mp3")
    m5 = loadSound("musics/world-asian-carnival-china-traditional-music-travel-118593.mp3")


}

function setup() {
    createCanvas(windowWidth, windowHeight)
    playbutton = createButton("play")
    playbutton.position(width / 2 - 200, 250)
    playbutton.class("customButton")
    playbutton.size(400, 50)

    settingbutton = createButton("settings")
    settingbutton.position(width / 2 - 200, 310)
    settingbutton.class("customButton")
    settingbutton.size(400, 50)

    settings.vol.buttons.plus = createButton("+")
    settings.vol.buttons.plus.position(width / 2 + 150, 100)
    settings.vol.buttons.plus.class("customButton")
    settings.vol.buttons.plus.size(50, 50)
    settings.vol.buttons.plus.hide()

    settings.vol.buttons.minu = createButton("-")
    settings.vol.buttons.minu.position(width / 2 - 200, 100)
    settings.vol.buttons.minu.class("customButton")
    settings.vol.buttons.minu.size(50, 50)
    settings.vol.buttons.minu.hide()

    settings.volume = createButton("volume")
    settings.volume.position(width / 2 - 150, 250)
    settings.volume.class("customButton")
    settings.volume.size(300, 50)
    settings.volume.hide()

    settings.music = createButton("music")
    settings.music.position(width / 2 - 150, 310)
    settings.music.class("customButton")
    settings.music.size(300, 50)
    settings.music.hide()

    b1 = createButton("music 1")
    b1.position(width / 2 - 325, 250)
    b1.class("customButton")
    b1.size(650, 50)
    b1.hide()

    b2 = createButton("music 2")
    b2.position(width / 2 - 325, 310)
    b2.class("customButton")
    b2.size(300, 50)
    b2.hide()

    b3 = createButton("music 3")
    b3.position(width / 2 + 25, 310)
    b3.class("customButton")
    b3.size(300, 50)
    b3.hide()

    b4 = createButton("music 4")
    b4.position(width / 2 - 325, 370)
    b4.class("customButton")
    b4.size(300, 50)
    b4.hide()

    b5 = createButton("music 5")
    b5.position(width / 2 + 25, 370)
    b5.class("customButton")
    b5.size(300, 50)
    b5.hide()

    backbutton = createImg("./buttons/back.png")
    backbutton.position(width / 30, 20)
    backbutton.size(50, 50)
    backbutton.hide()

    ms = [m1, m2, m3, m4, m5]
    bs = [b1, b2, b3, b4, b5]

    ms[0].loop()

}

function draw() {


    if (gamestate === "wait") {
        background(waitbg)
        playbutton.show()
        settingbutton.show()
        backbutton.hide()
        b1.hide()
        b2.hide()
        b3.hide()
        b4.hide()
        b5.hide()
    }

    if (playbutton.mousePressed(() => {
        gamestate = "selectweapon"
    })) { }

    if (gamestate === "selectweapon") {
        background(0)
        playbutton.hide()
        settingbutton.hide()
        backbutton.show()
    }
    

    if(settingbutton.mousePressed(()=>{
        gamestate="settingsmusic"
    })){} 



    
    if (gamestate === "settingsmusic") {
        background(waitbg)
        playbutton.hide()
        settingbutton.hide()
        settings.volume.hide()
        settings.music.hide()
        backbutton.show()
        settings.vol.buttons.plus.show()
        settings.vol.buttons.minu.show()
        b1.show()
        b2.show()
        b3.show()
        b4.show()
        b5.show()

        if (settings.vol.buttons.plus.mousePressed(() => {
            settings.vol.volume += 0.1
        })) { }
        if (settings.vol.buttons.minu.mousePressed(() => {
            settings.vol.volume -= 0.1
        })) { }

        if(settings.vol.buttons.plus.mousePressed(()=>{
            settings.vol.volume+=0.1
        })){}
        if(settings.vol.buttons.minu.mousePressed(()=>{
            settings.vol.volume-=0.1
        })){}
        rect(windowWidth/2-125,125,250,10)
        fill("blue")
        rect(windowWidth/2-125,125,250*settings.vol.volume,10)
        fill(255)
        ellipse(windowWidth/2-125+250*settings.vol.volume,130,20,20)

        // select music
        if(b1.mousePressed(()=>{
            if(m2.isPlaying() || m3.isPlaying() || m4.isPlaying() || m5.isPlaying()){
                if(m2.isPlaying()){
                    m2.stop()
                }
                else if(m3.isPlaying()){
                    m3.stop()
                }
                else if(m4.isPlaying()){
                    m4.stop()
                }
                else if(m5.isPlaying()){
                    m5.stop()
                }
            }
            m1.play()
        
        })){} 
        if(b2.mousePressed(()=>{
            if(m1.isPlaying() || m3.isPlaying() || m4.isPlaying() || m5.isPlaying()){
                if(m1.isPlaying()){
                    m1.stop()
                }
                else if(m3.isPlaying()){
                    m3.stop()
                }
                else if(m4.isPlaying()){
                    m4.stop()
                }
                else if(m5.isPlaying()){
                    m5.stop()
                }
            }
            m2.play()
        })){}
         
        if(b3.mousePressed(()=>{
            if(m2.isPlaying() || m1.isPlaying() || m4.isPlaying() || m5.isPlaying()){
                if(m2.isPlaying()){
                    m2.stop()
                }
                else if(m1.isPlaying()){
                    m1.stop()
                }
                else if(m4.isPlaying()){
                    m4.stop()
                }
                else if(m5.isPlaying()){
                    m5.stop()
                }
            }
            m3.play()
        })){} 

        if(b4.mousePressed(()=>{
            if(m2.isPlaying() || m3.isPlaying() || m1.isPlaying() || m5.isPlaying()){
                if(m2.isPlaying()){
                    m2.stop()
                }
                else if(m3.isPlaying()){
                    m3.stop()
                }
                else if(m1.isPlaying()){
                    m1.stop()
                }
                else if(m5.isPlaying()){
                    m5.stop()
                }
            }
            m4.play()
        })){} 

        if(b5.mousePressed(()=>{
            if(m2.isPlaying() || m3.isPlaying() || m4.isPlaying() || m1.isPlaying()){
                if(m2.isPlaying()){
                    m2.stop()
                }
                else if(m3.isPlaying()){
                    m3.stop()
                }
                else if(m4.isPlaying()){
                    m4.stop()
                }
                else if(m1.isPlaying()){
                    m1.stop()
                }
            }
            m5.play()
        })){} 


    }
    
    if (backbutton.mousePressed(() => {
        gamestate = "wait"
    })) {
    }

}