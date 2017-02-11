/*
Write a function called *dataTypes* to compare and return results, based on the argument supplied to the function. Follow through the test to produce the perfect function that accounts for all expectations.
For strings, return its length.
For null or undefined return string 'no value'
For booleans return the boolean
For numbers return a string showing how it compares to hundred e.g. For 67 return 'less than 100' for 4034 return 'more than 100' or equal to 100 as the case may be
For arrays return the 3rd index, or undefined if it doesn't exist.
For functions call the function and pass in true as an argument and return it.

*/
module.exports ={
dataTypes : function (dat)
            {
                //Check for string value
                if(typeof dat === "string") return dat.length;
                
                //Check for 'undefined' and 'null' values
                else if(dat === undefined || dat === null) return "no value" ;
                
                //Check for boolean value
                else if(typeof dat === "boolean") return dat;
                
                //Check for number value
                else if(typeof dat === "number") return compareTo100(dat);
                
                //Check for arrays
                else if(Array.isArray(dat)) return returnThirdElement(dat);
                
                //Check for function
                else if(typeof dat === "function") return dat(true);

                //Function to compare to 100
                function compareTo100(num)
                  {
                    if (num === 100) return "equal to 100";
                    
                    else if(num < 100) return "less than 100";
                    
                    else if(num > 100) return "more than 100";
                  }

                //Function to return 3rd elemnt of an array
                function returnThirdElement (arr)
                  {
                      if(arr[2] !== undefined) return arr[2];
                      
                      else return undefined;
                  }
              
            
            }
};