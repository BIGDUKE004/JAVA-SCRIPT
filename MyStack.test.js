const stack = require ('./MyStack.js')

beforeEach(() => {
    while(stack().size() > 0) {
        stack().pop();
    }
});
 
test('test that stack is empty', () => {
    expect(stack().isEmpty()).toBe(true)
})

test('test that i can add to stack', () => {
    stack().push('miracle')
    expect(stack().size()).toBe(1)
})

test('test that method pop works', () => {
    stack().push('miracle')
    stack().push('elijah')
    expect(stack().pop()).toBe('elijah')
    expect(stack().size()).toBe(1)

})

// test('test that method pop throws error', () => {
//     expect(stack().pop()).toThrow('Stack is empty')
// })

test('test that method peek works', () => {
    stack().push('miracle')
    stack().push('elijah')
    expect(stack().peek()).toEqual('miracle')
})

test('test that method size works', () => {
    stack().push('miracle')
    stack().push('elijah')
    expect(stack().size()).toBe(2) 
})

test('test that i get values of all whats in the stack', () => {
    stack().push('miracle')
    stack().push('elijah')
    expect(stack().values()).toEqual(['miracle', 'elijah'])
})