class Canvas2DUtility {

    constructor(canvas) {
        this.canvasElement = canvas;
        this.context2d = canvas.getContext('2d');
    }

    get canvas() {
        return this.canvasElement;
    }

    get context() {
        return this.context2d;
    }

    drawRect(x,y,width,height,color){

    }

    drawLine(x1,y1,x2,y2,color,width=1){

    }

    drawPolygon(points,color){

    }

    drawCircle(x,y,radius,color){

    }

    drawFan(x,y,radius,startRadian,endRadian,color){

    }

    drawQuadraticBzier(x1,y1,x2,y2,cx,cy,color,width=1){

    }

    drawCubicBzier(x1,y1,x2,y2,cx1,cy1,cx2,cy2,color,width=1){

    }

    drawText(text,x,y,color,width){

    }

    imageLoader(path,callback) {

    }
}