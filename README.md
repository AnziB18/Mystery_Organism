# Mysterious Organism in JavaScript

> Challenge Project: Mysterious Organism

## Table of Contents

* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->

## General Information

* I’m a part of a fictional research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. My team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.
As you progress through the steps, use the terminal and console.log() statements to check the output of your loops and functions

* This project is part of a project during my education on #Codecemy

<!-- You don't have to answer all the questions - just the ones relevant to your project. -->

## Technologies Used

* JavaScript ES2016
* Visual Studio Code

## Features

List the ready features here:

* Create difference Organism with a constructor function and compare it with 30 different instances.

1. A folder structure that makes sense for the project
2. A JavaScript file
3. A README file

## Screenshots

current no Screenshots!
<!--![Example screenshot](./img/screenshot.png)
 If you have screenshots you'd like to share, include them here. -->

## Setup

* Visual Studio Code

* Command Line

* Github

## Usage

## Project Status

* Project is: _in progress_

## Room for Improvement

Room for improvement:

* Improvement - no Improvements now

## To do

1. For start there’re 2 helper func’s: returnRandBase() & mockUpStrand(). DNA is comprised of 4 bases (Adenine, Thymine, Cytosine, & Guanine). When returnRandBase() is called, it’ll randomly select base & return base ('A','T','C', or 'G'). mockUpStrand() is used to generate array containing 15 bases to represent single DNA strand with 15 bases. I’ll use these helper func’s later to create your objects that represent P. aequor.

2. Since I need to create multiple objects, I create factory function pAequorFactory() that has 2 parameters:

    * 1st parameter is number (no 2 organisms should have same number).

    * 2nd parameter is array of 15 DNA bases. pAequorFactory() should return object that contains properties specimenNum & dna that
    correspond to parameters provided. I’ll also add more methods to this returned object in later steps.

3. My team wants me to simulate P. aequor‘s high rate of mutation (change in its DNA). To simulate mutation, in pAequorFactory()‘s returned object, add method .mutate().
.mutate() is responsible for randomly selecting base in object’s dna property & changing current base to a different base. Then .mutate() will return object’s dna.
E.g., if randomly selected base is 1st base & it is 'A', base must be changed to 'T', 'C', or 'G'. But it can’t be 'A' again.

4. My research team wants to be able to compare DNA sequences of different P. aequor. I’ll have to add new method (.compareDNA()) to returned object of factory function.
.compareDNA() has 1 parameter, another pAequor object.Behavior of .compareDNA() is to compare current pAequor‘s .dna with passed in pAequor‘s .dna & compute how many bases are identical & in same locations. .compareDNA() does not return anything, but prints message that states percentage of DNA 2 objects have in common — use .specimenNum to identify which pAequor objects are being compared. E.g.:
ex1 = ['A', 'C', 'T', 'G']
ex2 = ['C', 'A', 'T', 'T']
ex1 & ex2 only have 3rd element in common ('T') & therefore, have 25% (1/4) of their DNA in common. Resulting message would read something along lines of: specimen #1 and specimen #2 have 25% DNA in common.

5. P. aequor have likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases. In returned object of pAequorFactory(), add another method .willLikelySurvive().
.willLikelySurvive() returns true if object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.

6. With factory function set up, your team requests that you create 30 instances of pAequor that can survive in their natural
environment. Store these instances in array for your team to study later.

7. If you’d like to challenge yourself further, you could consider following:

* Create .complementStrand() method to factory function’s object that returns complementary DNA strand. Rules are that 'A's match with 'T's & vice versa. Also, 'C's match with 'G's & vice versa. (Check hint for more details)

* use .compareDNA() to find 2 most related instances of pAequor.

## Acknowledgements

* This project was inspired by Codecademy

## Contact

* Created by [@ANZIB18]
