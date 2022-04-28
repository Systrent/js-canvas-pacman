let pacmanMap = `WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
WW............WW............WWW
WW.WWWW.WWWWW.WW.WWWWW.WWWW.WWW
WW*WWWW.WWWWW.WW.WWWWW.WWWW*WWW
WW.WWWW.WWWWW.WW.WWWWW.WWWW.WWW
WW..........................WWW
WW.WWWW.WW.WWWWWWWW.WW.WWWW.WWW
WW.WWWW.WW.WWWWWWWW.WW.WWWW.WWW
WW......WW....WW....WW......WWW
WWWWWWW.WWWWW.WW.WWWWW.WWWWWWWW
WWWWWWW.WWWWW.WW.WWWWW.WWWWWWWW
WWWWWWW.WW..........WW.WWWWWWWW
WWWWWWW.WW.WWW--WWW.WW.WWWWWWWW
WWWWWWW.WW.WooooooW.WW.WWWWWWWW
...........WooooooW............
WWWWWWW.WW.WooooooW.WW.WWWWWWWW
WWWWWWW.WW.WWWWWWWW.WW.WWWWWWWW
WWWWWWW.WW..........WW.WWWWWWWW
WWWWWWW.WW.WWWWWWWW.WW.WWWWWWWW
WWWWWWW.WW.WWWWWWWW.WW.WWWWWWWW
WW............WW............WWW
WW.WWWW.WWWWW.WW.WWWWW.WWWW.WWW
WW*WWWW.WWWWW.WW.WWWWW.WWWW*WWW
WW...WW................WW...WWW
WWWW.WW.WW.WWWWWWWW.WW.WW.WWWWW
WWWW.WW.WW.WWWWWWWW.WW.WW.WWWWW
WW......WW....WW....WW......WWW
WW.WWWWWWWWWW.WW.WWWWWWWWWW.WWW
WW.WWWWWWWWWW.WW.WWWWWWWWWW.WWW
WW..........................WWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW`
    .split('\n')
    .map((e) => e.split(''));
// Código añadido en clase
class Map {
    constructor(position, border, red_point, green_point) {
        this.position = position;
        this.border = border;
        this.red_point = red_point;
        this.green_point = green_point;
    }

    keyboard_event() {}
    update() {}
    draw(ctx) {
        let totalRatio = 500 / pacmanMap.length;

        for (let y = 0; y < pacmanMap.length; y++) {
            for (let x = 0; x < pacmanMap[y].length; x++) {
                ctx.beginPath();
                const mapCharacter = pacmanMap[y][x];
                if (mapCharacter == 'W') {
                    ctx.fillStyle = this.border;
                    ctx.fillRect(x * totalRatio, y * totalRatio, totalRatio, totalRatio);
                    
                }
                if (mapCharacter == '.') {
                    ctx.fillStyle = this.red_point;
                    ctx.arc(x * totalRatio + totalRatio / 2, y * totalRatio + totalRatio / 2, 4, 0, 2 * Math.PI);
                }
                if (mapCharacter == '*') {
                    ctx.fillStyle = this.green_point;
                    ctx.arc(x * totalRatio + totalRatio / 2, y * totalRatio + totalRatio / 2, 4, 0, 2 * Math.PI);
                }
                ctx.closePath();
                ctx.fill();
            }
        }
    }
}
