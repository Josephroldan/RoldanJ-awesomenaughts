game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        // reset the score
        game.data.score = 0;

        me.levelDirector.loadLevel("level01");

        var player = me.pool.pull("player", 0, 420, {});
        me.game.world.addChild(player, 20);
        //puts starting coordinates
        var gamemanager = me.pool.pull("GameManager", 0, 0, {});
        me.game.world.addChild(gamemanager, 0);
        
        
        
        me.input.bindKey(me.input.KEY.RIGHT, "right");
       
       me.input.bindKey(me.input.KEY.LEFT, "left");
        // binds left arrow key for left direction
        me.input.bindKey(me.input.KEY.UP, "jump");
        
        me.input.bindKey(me.input.KEY.A, "attack");
        
        
        //binds movement to right arrow key
        // add our HUD to the game world
        this.HUD = new game.HUD.Container();
        me.game.world.addChild(this.HUD);
    },
    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        // remove the HUD from the game world
        me.game.world.removeChild(this.HUD);
    }
});
