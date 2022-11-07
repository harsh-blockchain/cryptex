// SPDX-License-Identifier: Unlicensed

pragma solidity >0.7.0 <=0.9.0;

contract Transactions {
    uint256 transactionCounter;

    event transfer(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp
        
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
    }

    TransferStruct[] transactions;

    function addToTransactions(
        address payable receiver,
        uint256 amount,
        string memory message
    ) public {
        transactionCounter++;
        transactions.push(
            TransferStruct(
                msg.sender,
                receiver,
                amount,
                message,
                block.timestamp
                
            )
        );
        emit transfer(
            msg.sender,
            receiver,
            amount,
            message,
            block.timestamp
            
        );
    }

    function getAllTransaction() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCounter;
    }
}
