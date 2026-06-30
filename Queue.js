function queue() {
    const queue_list = []; 

    return {
        isEmpty: () => queue_list.length === 0,

        enqueue: (value) => queue_list.push(value),

        dequeue: () => {
            if (queue_list.length === 0) {
                throw new Error('Queue is empty');
            }
            return queue_list.shift(); 
        },

        front: () => queue_list[0],

        rear: () => queue_list[queue_list.length - 1],

        size: () => queue_list.length,

        values: () => queue_list
    };
}

module.exports = queue;
