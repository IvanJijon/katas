# FizzBuzz kata - Object Oriented Programming

FizzBuzz kata is a classic. The kata statement is available [here](https://codingdojo.org/kata/FizzBuzz/).

## I focused on

    - TDD methodology
    - Naming (variables, classes, methods, ...)
    - Object Oriented paradigm 
    - Following SOLID principles

## What I like about my solution

Rules are **flexible** and **new rule logic** can be **easily incorporated** by a user with **little maintenance** work from the development team; development time is expensive.

## Approach

Since this Kata can have multiple approaches I chose an approach where the replacement `rules` can be defined by a _user_. The order in which those rules are applied matters.

### Comments on my approach

I simulate the user defined rules in variable `DEFINED_RULES`.

All the rules have a replacement logic. An interface `IRule` allows to have different kind of rules, each one with its own logic.

In this kata two specific rules are provided. They follow a same logic:
> if `number` is divisible by `divisor` then replace `number` by a `word`

`DivisionRule` is an implementation of `IRule` where the validation follows the logic above. The user must provide a divisor and a replacement word such as `[3, "Fizz"]`.

It is easy to add a new `DivisionRule` in this code. The user must only provide a divisor and a replacement word and add it to `DEFINED_RULES` in the desired order. For example `[7, "Bazz"]`.

Let's suppose another rule should be added to the existing ones but with a different logic. For example:
> if `number` contains a 9 then add "!" at the end

We should then create an `ExclamationRule` that implements this logic and add it to the `DEFINED_RULES` at the end.


