---
layout: post
title: A 120$ Reentrancy attack
description: How I won 120$ exploiting a Reentrancy attack on a Ethereum Smart Contract.
summary: How I won 120$ exploiting a Reentrancy attack on a Ethereum Smart Contract, and what I learn from it.
tags: blockchain security
---

Since I wanted to gather as more information as possible about the Web3 ecosystem, I started looking for some meetup in my area.
I found this one that was all about Blockchain develepment called **Web3 Night**, at my university, organized by [Pisa Dev](https://pisa.dev).

## Where it started 

One of the speaker, made a presentation about how smart contracts can be really easy to write but hard to make them secure, and showed a bunch of tool to help developers writing more secure smart contracts.

As part of the talk, the speaker challenged the audience to try and find any potential vulnerabilities in [a smart contract that he had provided](https://polygonscan.com/address/0xbAAf846f531d98DFca8Eb06D4B2e2948A5A593C7#code#L1). 
Being a computer science student with a keen interest in blockchain, I eagerly accepted the challenge and set about analyzing the contract.

## The challenge 

Once home and some intense scrutiny (using a tool he suggested called [slinther](https://github.com/crytic/slither)), I finally hit upon something interesting: a potential **reentrancy attack**.


For those unfamiliar with the concept, a reentrancy attack is a type of vulnerability that allows an attacker to repeatedly call a function in a smart contract, essentially allowing them to drain the contract's balance and potentially causing it to fail.

The part of the contact interested is the following:
```solidity
  function withdraw() public {
        require(balanceOf[msg.sender] > 0, "Insufficient funds");
        (bool success,) = payable(msg.sender).call{value: balanceOf[msg.sender]}("");
        require(success, "Transfer failed");
        balanceOf[msg.sender] = 0;
    }
```
As we can see, the update of the `balance` is being made after a the transaction is made and this opens up a problem.

We could make another smart contract interact with this vulnerable one, and use a function called `receive()` that is triggered everytime a payment is made.
Inside this function we can *re-call* `withdraw()` immediatelly, and since the balance will not be updated in time, we can drain the contract!

An example of the code used:

```solidity
    receive() external payable {
        if (address(etherBank).balance > 0) {
            console.log("reentering...");
            etherBank.withdraw();
        } else {
            console.log("victim account drained");
            //trandfer the funds from the contract to me
            payable(owner).transfer(address(this).balance);
        }
    }
    
```

## Time to rob the Bank!

I was able to confirm my suspicions by writing a test case and running it on a local Ethereum testnet in the [Remix IDE](https://remix.ethereum.org). 
To my amazement, the attack worked exactly as I had predicted, and the smart contract's balance was quickly drained.

I immediately deployed my contract to mainnet and...

> 120 $ WORTH OF MATIC IN MY WALLET!

## Some consideration

This bug, is one of the most famous in the smart contracts world, therefore nowadays is really unlikely to find one, thanks to all the tools that are available to help devs in the process of building their contracts.

But discovering the reentrancy attack was a thrilling experience for me, and it reinforced my belief in the importance of constantly testing and reviewing code for vulnerabilities.

Overall, attending the talk and participating in the challenge was a valuable learning experience.