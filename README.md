# sportradar task

<!--toc:start-->

- [sportradar task](#sportradar-task)
  - [architectural decision records](#architectural-decision-records)
    - [Functional Requirements](#functional-requirements)
    - [Non-Functional Requirements](#non-functional-requirements)
  - [TODO-LIST](#todo-list)
  <!--toc:end-->

## architectural decision records

[ADR - Programming Language Selection for the Project](/ADR/Programming%20Language%20Selection%20for%20the%20Project.md)

[ADR - Project Branches Structure](/ADR/Project%20Branches%20Structure.md)

### Functional Requirements

| ID     | Requirement                                                                                                 | Done |
| ------ | ----------------------------------------------------------------------------------------------------------- | ---- |
| F1     | Start a new match, assuming initial score 0–0, and add it to the scoreboard, capturing home and away teams. | DONE |
| F2     | Update the score of a match by providing absolute scores for the home and away teams.                       | DONE |
| F3\*\* | Finish a match currently in progress and remove it from the scoreboard.                                     | DONE |
| F4\*\* | Get a summary of matches in progress, ordered by their total score, with ties broken by recency.            | DONE |

> F3: it is dubious to me the word "remove it", as is not saying "delete it", o choose to just flag it to finished

> F4: I choose to return a summary string, it is not very useful as library but I understood that was required to return this way

### Non-Functional Requirements

| ID      | Requirement                                                                                             | Done |
| ------- | ------------------------------------------------------------------------------------------------------- | ---- |
| NF1     | Implement the simplest solution that works, focusing on edge cases and avoiding unnecessary complexity. | DONE |
| NF2\*\* | Use an in-memory store (e.g., collections) to manage the required data.                                 | DONE |
| NF3\*\* | Adhere to clean code principles, including SOLID design, test-driven development (TDD), and OO design.  | DONE |
| NF4     | Provide a commit history to reflect the progress, with the solution in a source control repository.     | DONE |
| NF5     | Include a `README.md` file with project documentation, assumptions, and additional notes.               | DONE |
| NF6\*\* | Ensure the solution focuses on quality and adheres to high development standards.                       | DONE |

> NF2: I use typescript Record, I could make a proper "database class" to follow a better OOP patterns but I think that was unnecessary
> so scoreboard is kinda of manipulating the database directly, I understand
> that is not optimal or correct, in a real-world scenario I would not do this
> way.

> NF3: I choose typescript to solve this problem (see the [ADR](/ADR/Programming%20Language%20Selection%20for%20the%20Project.md) to understand why), so please take that as consideration.

> NF6: Is hard to tell what that really means in coding test, for exemple I focus more in show that I know the processes of creating good quality code, that creating high performance code in this test. (but I can of course)

## TODO-LIST

| Desired Order | Task                                                                                                                     | Done |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ | ---- |
| TSK1          | [ADR - Programming Language Selection for the Project](/ADR/Programming%20Language%20Selection%20for%20the%20Project.md) | DONE |
| TSK2          | [ADR - Project Branches Structure](ADR/Project%20Branches%20Structure.md)                                                | DONE |
| TSK3          | Node TS init                                                                                                             | DONE |
| TSK4          | Node TS test tools init                                                                                                  | DONE |
| TSK5          | F1                                                                                                                       | DONE |
| TSK6          | F2                                                                                                                       | DONE |
| TSK7          | F3                                                                                                                       | DONE |
| TSK8          | F4                                                                                                                       | DONE |
| TSK9          | NF(n) check each of the Non-Functional Requirement                                                                       | DONE |
| TSK10         | make a impl in a the index.ts to check if works as library                                                               | DONE |

## Dependencies

nodejs + npm

## Test the lib with

```bash
npm install
npm run test

# run index.ts that is a simple implementation of the lib
npm run start
```
