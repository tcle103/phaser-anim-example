// Tien Le <ticale@ucsc.edu>

class Smiley extends Phaser.Scene {
    constructor() {
        super("smileyScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

       
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        this.load.setPath("./assets/kenney_playing-cards-pack/PNG/");
        this.load.image("face", "Cards (large)/card_diamonds_Q.png");
        this.load.image("face2", "Cards (large)/card_diamonds_03.png");
        this.load.image("frontHalf", "edited/enemy flips/card_diamonds_Q_half.png");
        this.load.image("frontHalf2", "edited/enemy flips/card_diamonds_03_half.png");
        this.load.image("frontToBack", "edited/enemy flips/front_to_back_side.png");
        this.load.image("backHalf", "edited/enemy flips/card_back_half.png");
        this.load.image("back", "Cards (large)/card_back.png");
        this.load.image("backToFront", "edited/enemy flips/back_to_front_side.png");
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        this.anims.create({key: "flip1", 
                            frames: [
                                {key: "face"},
                                {key: "frontHalf"},
                                {key: "frontToBack"},
                                {key: "backHalf"}, 
                                {key: "back"},
                                {key: "backHalf"},
                                {key: "backToFront"},
                                {key: "frontHalf"},
                                {key: "face"}
                            ],
                            frameRate: 12,
                            repeat: -1,
                            repeatDelay: 800 });

        this.anims.create({key: "flip2", 
                            frames: [
                                {key: "face2"},
                                {key: "frontHalf2"},
                                {key: "frontToBack"},
                                {key: "backHalf"}, 
                                {key: "back"},
                                {key: "backHalf"},
                                {key: "backToFront"},
                                {key: "frontHalf2"},
                                {key: "face2"}
                            ],
                            frameRate: 10});

        this.card = this.add.sprite(85, 150, "face");
        this.card.setScale(1.75);
        this.card.play("flip1");

        this.card1 = this.add.sprite(215, 150, "face2");
        this.card1.setScale(1.75);

        let playing = false;
        this.input.on('pointerdown', () => {
            if (!playing) {
                this.flipAnim = this.card1.play("flip2");
                playing = true;

                this.flipAnim.on(Phaser.Animations.Events.ANIMATION_COMPLETE, ()=> {
                    playing = false;
                });
            }
            
        });

       
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        
    }

}