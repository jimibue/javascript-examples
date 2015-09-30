/**
 * Created by jcc on 8/30/15.
 */
var ArraySum =
{
    currentSum:0,
    add:function(n){
        return function(){
            return this.currentSum += n;
        }.bind(this.ArraySum)();

    },
    each:function(arr,func)
    {
        var newArr=[];
        for(var i =0; i<arr.length; i++)
        {
            newArr.push(func(arr[i]));
        }
        return newArr;


    },
    sumArray: function(arr)
    {
        return function() {
            this.currentSum =0;
            return this.each(arr, this.add);
        }.bind(ArraySum)();
    }


};