// version of solidity
pragma solidity ^0.4.17;
//new contract // contract name
contract Inbox {
    //instance variables that will exist in this contract
    string public message;
    //functions this contract
    
    //construction function
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}