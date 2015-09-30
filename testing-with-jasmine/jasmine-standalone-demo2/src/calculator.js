/**
 * Created by jcc on 8/30/15.
 */
window.Calculator ={
    currentValue:0,

    add:function(){
        for(var i= 0; i<arguments.length; i++) {
             this.currentValue += arguments[i];
        }
        return this.currentValue;
    }

};