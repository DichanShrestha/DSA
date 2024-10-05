import LinkedList from './LlForHashMap.mjs';  // Assuming LinkedList is imported correctly

class Entry {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class HashMap {
    constructor(bucketSize = 10) {
        this.bucketSize = bucketSize; 
        this.buckets = new Array(bucketSize).fill(null);  // Array of linked lists for each bucket
    }

    // Hash function to map keys to bucket index
    #hashKey(key) {
        return key % this.bucketSize;
    }

    // Add or update key-value pair in the hashmap
    put(key, value) {
        const index = this.#hashKey(key);  // Get the bucket index

        // If there's no linked list at this index, initialize one
        if (this.buckets[index] === null) {
            this.buckets[index] = new LinkedList();  // New linked list for this bucket
        }

        let current = this.buckets[index].getHead();  // Use a method to access head

        // Traverse linked list to check if the key already exists
        while (current !== null) {
            if (current.data.key === key) {
                // Key exists, update value
                current.data.value = value;
                return;
            }
            current = current.next;
        }

        // Key doesn't exist, insert a new entry
        this.buckets[index].push(new Entry(key, value));
    }

    // Retrieve the value by key
    get(key) {
        const index = this.#hashKey(key);  // Get bucket index
        const bucket = this.buckets[index];

        if (bucket === null) return null;  // No bucket exists at this index

        let current = bucket.getHead();  // Use a method to access head

        // Traverse linked list to find the key
        while (current !== null) {
            if (current.data.key === key) {
                return current.data.value;  // Key found, return the value
            }
            current = current.next;
        }

        return null;  // Key not found
    }

    // Remove a key-value pair from the hashmap
    remove(key) {
        const index = this.#hashKey(key);
        const bucket = this.buckets[index];

        if (bucket === null) return false;  // No bucket exists

        let current = bucket.getHead();
        let previous = null;

        // Traverse linked list to find the key
        while (current !== null) {
            if (current.data.key === key) {
                if (previous === null) {
                    // Head of the list is the entry to remove
                    bucket.setHead(current.next);  // Set the new head
                } else {
                    previous.next = current.next;  // Remove current node
                }
                return true;
            }
            previous = current;
            current = current.next;
        }

        return false;  // Key not found
    }

    // Debug function to print hashmap content
    print() {
        this.buckets.forEach((bucket, index) => {
            if (bucket !== null) {
                console.log(`Bucket ${index}: ${bucket.toString()}`);
            }
        });
    }
}

// Example Usage
const hashMap = new HashMap(5);

hashMap.put(1, "Name");
hashMap.put(2, "Address");
hashMap.put(6, "Email");
hashMap.put(11, "Phone");

console.log("Value for key 1:", hashMap.get(1));  // Output: Name
console.log("Value for key 6:", hashMap.get(6));  // Output: Email

hashMap.print();  // Outputs the bucket content

hashMap.remove(6);
console.log("After removing key 6:");
hashMap.print();
