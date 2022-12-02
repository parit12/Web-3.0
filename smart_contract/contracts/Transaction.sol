//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transation {
    uint256 Transationcounter;

    event Transfer(
        address from,
        address reciver,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );
    struct TransferStruct {
        address sender;
        address payable reciver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    TransferStruct[] transations;

    function addTOBlockChain(
        address payable reciver,
        uint256 amount,
        string memory message,
        string memory keyword
    ) public {
        Transationcounter += 1;
        transations.push(
            TransferStruct(
                msg.sender,
                reciver,
                amount,
                message,
                block.timestamp,
                keyword
            )
        );
        emit Transfer(
            msg.sender,
            reciver,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }

    function getAllTransaction() public view returns (TransferStruct[] memory) {
        return transations;
    }

    function getTransactionCount() public view returns (uint256) {
        return Transationcounter;
    }
}
