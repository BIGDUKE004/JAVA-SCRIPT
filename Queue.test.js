const Queue = require('./Queue.js');

let queue;

beforeEach(() => {
    queue = Queue();   // Create ONE new queue
});


test('test that queue is empty', () => {
    expect(queue.isEmpty()).toBe(true)
})

test('test that i can add to queue', () => {
    queue.enqueue('miracle')
    expect(queue.size()).toBe(1)
})

test('test that method dequeue works', () => {
    queue.enqueue('miracle')
    queue.enqueue('elijah')
    expect(queue.dequeue()).toBe('miracle')
    expect(queue.size()).toBe(1)

})

// test('test that method pop throws error', () => {
//     expect(stack().pop()).toThrow('Stack is empty')
// })

test('test that method front works', () => {
    queue.enqueue('miracle')
    queue.enqueue('elijah')
    expect(queue.front()).toEqual('miracle')
})

test('test that method rear works', () => {
    queue.enqueue('miracle')
    queue.enqueue('elijah')
    expect(queue.rear()).toBe('elijah')
})

test('test that method size works', () => {
    queue.enqueue('miracle')
    queue.enqueue('elijah')
    expect(queue.size()).toBe(2)
})

test('test that i get values of all whats in the queue', () => {
    queue.enqueue('miracle')
    queue.enqueue('elijah')
    expect(queue.values()).toEqual(['miracle', 'elijah'])
})