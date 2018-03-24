/**
 * Created by hansel.tritama on 3/23/18.
 */
function LinkedList(){
    this.head = null;//Linked List is empty
}

LinkedList.prototype.isEmpty = function () {
    return this.head === null;
};

LinkedList.prototype.size = function () {
    let currentNode = this.head;
    let count = 0;
    while(currentNode !== null)
    {
        count++;
        currentNode = currentNode.next;
    }
    return count;
};

LinkedList.prototype.prepend = function (value) {
    let newNode = {
        data: value,
        next: this.head
    };

    this.head = newNode;
};

LinkedList.prototype.append = function (value) {
    let currentNode = this.head;
    let newNode = {
        data: value,
        next: null//so we don't need to do currentNode.next = null
    };

    if(this.isEmpty())
    {
        this.head = newNode;
        return;
    }

    while(currentNode.next !== null)
    {
        currentNode =  currentNode.next;
    }
    currentNode.next = newNode;
};

LinkedList.prototype.contains = function (value) {
    let currentNode = this.head;
    while(currentNode!==null)
    {
        if(currentNode.data === value) return true;
        currentNode = currentNode.next;
    }

    return false;
};

LinkedList.prototype.remove = function (value) {
    //check if the value is in the list
    if(!this.contains(value))
    {
        return; //value is NOT found
    }

    if(this.head.data === value)
    {
        this.head = this.head.next;
        return;
    }

    let prev = null;
    let curr = this.head;

    while(curr.data !== value)
    {
        prev = curr;
        curr = curr.next;
    }

    prev.next = curr.next;
};

LinkedList.prototype.print = function () {
    let output = '[';
    let currentNode = this.head;

    while(currentNode!==null)
    {
        output += currentNode.data;
        if(currentNode.next !== null)
        {
            output += ',';
        }
        currentNode = currentNode.next;
    }

    output += ']';
    return output;
};

let list = new LinkedList();
list.prepend(10);

console.log(list);