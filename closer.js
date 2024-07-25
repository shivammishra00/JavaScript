/////================= closer concept ================///// 
//  closer me function ke andar function fir us function ke andar function matlab nested function hota hai to isme ye sabse pahle inner vale variable ki value ko access kar pata hai uske baad hi apne upre vale value ko acceess karega ..... lekin yadi ha ek function ko dusare vale function ke bahar call karege to vo call nhi hoga balki error aa jayegi... 

let rupee = 100;         ////......  global variable 
function dadaji() {
    let rupee = 60;
    function papaji() {
        let rupee = 50;
        function mc() {
            let rupee = 40;      // --- legjical scope variable ....
            console.log(rupee)
        } mc()
    } papaji()

} dadaji()