import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class Game extends Scene {
	camera: Phaser.Cameras.Scene2D.Camera;
	vacuum: Phaser.Physics.Arcade.Sprite;
	ground: Phaser.GameObjects.Rectangle;
	objects: Phaser.Physics.Arcade.Group;
	cursors: Phaser.Types.Input.Keyboard.CursorKeys;

	constructor() {
		super('Game');
	}

	create() {
		this.camera = this.cameras.main;
		this.camera.setBackgroundColor(0x87ceeb);

		const gameWidth = this.cameras.main.width;
		const gameHeight = this.cameras.main.height;

		this.ground = this.add.rectangle(gameWidth / 2, gameHeight - 30, gameWidth, 60, 0x8b4513);
		this.physics.add.existing(this.ground, true);

		this.vacuum = this.physics.add.sprite(200, gameHeight - 150, null!);
		const vacuumGraphics = this.add.graphics();
		vacuumGraphics.fillStyle(0x0000ff);
		vacuumGraphics.fillRect(0, 0, 80, 60);
		vacuumGraphics.generateTexture('vacuum', 80, 60);
		vacuumGraphics.destroy();
		this.vacuum.setTexture('vacuum');

		this.vacuum.setCollideWorldBounds(true);
		this.vacuum.setBounce(0);

		this.physics.add.collider(this.vacuum, this.ground);

		this.objects = this.physics.add.group();

		for (let i = 0; i < 5; i++) {
			const x = 300 + i * 120;
			const y = gameHeight - 100;

			const colors = [0xff0000, 0x00ff00, 0xffff00, 0xff00ff, 0x00ffff];
			const color = colors[i % colors.length];

			const objectSprite = this.physics.add.sprite(x, y, null!);

			const objectGraphics = this.add.graphics();
			objectGraphics.fillStyle(color);
			if (i % 2 === 0) {
				objectGraphics.fillCircle(15, 15, 15);
				objectGraphics.generateTexture(`object_${i}`, 30, 30);
			} else {
				objectGraphics.fillRect(0, 0, 30, 30);
				objectGraphics.generateTexture(`object_${i}`, 30, 30);
			}
			objectGraphics.destroy();

			objectSprite.setTexture(`object_${i}`);
			objectSprite.setBounce(0.3);
			objectSprite.setCollideWorldBounds(true);

			this.objects.add(objectSprite);
		}

		this.physics.add.collider(this.objects, this.ground);

		this.physics.add.overlap(this.vacuum, this.objects, this.collectObject, undefined, this);

		this.cursors = this.input.keyboard!.createCursorKeys();

		const hoseGraphics = this.add.graphics();
		hoseGraphics.fillStyle(0x808080);
		hoseGraphics.fillRect(this.vacuum.x + 40, this.vacuum.y - 20, 100, 20);

		EventBus.emit('current-scene-ready', this);
	}

	collectObject(vacuum: any, object: any) {
		object.destroy();
	}

	update() {
		const speed = 200;

		if (this.cursors.left.isDown) {
			this.vacuum.setVelocityX(-speed);
		} else if (this.cursors.right.isDown) {
			this.vacuum.setVelocityX(speed);
		} else {
			this.vacuum.setVelocityX(0);
		}

		if (this.cursors.up.isDown && this.vacuum.body?.touching.down) {
			this.vacuum.setVelocityY(-350);
		}
	}
}
