class Node :
    def __init__(self, value):

        self.value = value    #value of a node
        self.next = None      #address to next node
        
class LinkedList :
    def __init__(self):
        self.head = None     #head of the node
        self.size = 0        #length of LL        
    
    def isEmpty(self):
        return self.size == 0
    
    def print(self):
        if not self.size:
            print("Linked list is empty")
            return
        curr = self.head
        to_print = ""
        while curr:
            to_print += str(curr.value) + " "
            curr = curr.next
        print(to_print)
        
    def append(self, value):
        node = Node(value)
        if not self.head:
            self.head = node
        else:
            curr = self.head
            while curr.next:
                curr = curr.next
            curr.next = node
        self.size += 1
        
    def prepend(self, value):
        node = Node(value)
        if not self.head:
            self.head = node
        else:
            node.next = self.head
            self.head = node
        self.size += 1
        
        
sList = LinkedList()

sList.append(1)
sList.append(2)
sList.append(3)
sList.append(4)


sList.prepend(1)
sList.prepend(2)
sList.prepend(3)
sList.prepend(4)

sList.print()



def findMidValue(linked_list):
    
    slow = linked_list.head
    fast = linked_list.head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    remv = slow.next
    slow.next = remv.next
    linked_list.size -= 1
        
    
findMidValue(sList)