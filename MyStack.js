
stack_list = []

function stack (){

    return{
        isEmpty : () => { if(stack_list.length == 0 ){
        return true
    } else {
        return false
    }
        },

        push : (value) => stack_list.push(value),

         pop: () => {
            if (stack_list.length === 0) {
                throw new Error('Stack is empty');
            }
            return stack_list.pop(); 
        },

        peek : () =>    stack_list[0],

        size : () =>    stack_list.length,

        values : () => stack_list

    };
}

module.exports = stack;