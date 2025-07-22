// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract CampaignFactory {
    address[] public CampaignAddress;
    event Campaigncreated(
        string title,
        uint requireAmount,
        string imgUrl,
        string story,
        address indexed owner,
        address indexed CampaignAddress,
        uint indexed timestamp
    );
    function createCampaign(
        string memory title,
        uint requireAmount,
        string memory imgeUrl,
        string memory story
    ) public {
        Campaign newCampaign = new Campaign(
            title,
            requireAmount,
            imgeUrl,
            story
        );
        CampaignAddress.push(address(newCampaign));
        emit Campaigncreated(
            title,
            requireAmount,
            imgeUrl,
            story,
            msg.sender,
            address(newCampaign),
            block.timestamp
        );
    }
}

contract Campaign {
    string public title;
    uint public requireAmount;
    string public imgeUrl;
    string public story;
    uint public receiveAmount;
    address payable public owner;
    event doneted(
        address indexed doner,
        uint indexed Amount,
        uint indexed timeStam
    );
    constructor(
        string memory _title,
        uint _requireAmount,
        string memory _imgeUrl,
        string memory _stoty
    ) {
        title = _title;
        requireAmount = _requireAmount;
        imgeUrl = _imgeUrl;
        story = _stoty;
        owner = payable(msg.sender);
    }
    function donet() public payable {
        require(requireAmount > receiveAmount, "receiveAmount has full filled");
        owner.transfer(msg.value);
        receiveAmount += msg.value;
        emit doneted(msg.sender, msg.value, block.timestamp);
    }
}
