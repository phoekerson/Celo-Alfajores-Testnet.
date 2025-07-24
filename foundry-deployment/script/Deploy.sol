// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import "../src/Storage.sol";

contract DeployScript is Script {
    function run() external {
        string memory privateKeyString = vm.envString("PRIVATE_KEY");
        uint256 deployerPrivateKey = vm.parseUint(privateKeyString);
        
        vm.startBroadcast(deployerPrivateKey);
        
        Storage storageContract = new Storage();
        
        vm.stopBroadcast();
        
        console.log("Storage deployed to:", address(storageContract));
    }
}