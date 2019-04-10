/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) 
{
    if(!head)
        return true;
    var count=1;
    var cur=head,arr1=[],arr2=[];
    while(cur.next!=null)
    {
        count++;
        cur=cur.next;
    }
    console.log(count);
    var cur=head,half=count/2,i=0;
    while(cur!=null)
    {
        if(i<half)
            arr1.push(cur.val);
        if(i>=half)
            arr2.push(cur.val);
        i++;
        cur=cur.next;
        
    }
    console.log(arr1);
    console.log(arr2);
    var length=arr2.length;
    for(var i=0,j=length; i<length,j>0; i++,j--)
    {
        if(arr1.shift(arr1[i])!=arr2.pop(arr2[j]))
            return false;
    }
    return true;
};