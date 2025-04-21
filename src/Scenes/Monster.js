class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 400;
        this.bodyY = 300;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability


        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        
        my.sprite.rightArm = this.add.sprite(this.bodyX + 120, this.bodyY + 60, "monsterParts", "arm_blueC.png");
        my.sprite.leftArm = this.add.sprite(this.bodyX - 120, this.bodyY + 60, "monsterParts", "arm_blueC.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.bodyX + 40, this.bodyY + 150, "monsterParts", "leg_blueA.png");
        my.sprite.leftLeg = this.add.sprite(this.bodyX - 40, this.bodyY + 150, "monsterParts", "leg_blueA.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueB.png");
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY + 10, "monsterParts", "mouthE.png");
        my.sprite.fang = this.add.sprite(this.bodyX, this.bodyY + 10, "monsterParts", "mouthF.png");
        my.sprite.fang.visible = false;
        my.sprite.leftEye = this.add.sprite(this.bodyX - 80, this.bodyY - 25, "monsterParts", "eye_human_blue.png");
        my.sprite.rightEye = this.add.sprite(this.bodyX + 80, this.bodyY - 25, "monsterParts", "eye_human_blue.png");
        my.sprite.rightEye.flipX = true;
        my.sprite.rightEye.flipY = true;
        my.sprite.rightHorn = this.add.sprite(this.bodyX + 60, this.bodyY - 75, "monsterParts", "detail_blue_horn_large.png");
        my.sprite.leftHorn = this.add.sprite(this.bodyX - 60, this.bodyY - 75, "monsterParts", "detail_blue_horn_large.png");
        my.sprite.leftHorn.flipX = true;

        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.input.keyboard.on('keydown-S', () => {
            my.sprite.mouth.visible = true;
            my.sprite.fang.visible = false;
        });
        this.input.keyboard.on('keydown-F', () => {
            my.sprite.mouth.visible = false;
            my.sprite.fang.visible = true;
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (this.leftKey.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x -= 2;
            }
        } else if (this.rightKey.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x += 2;
            }
        }

    }

}