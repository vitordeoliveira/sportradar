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
| F1     | Start a new match, assuming initial score 0–0, and add it to the scoreboard, capturing home and away teams. | OK   |
| F2     | Update the score of a match by providing absolute scores for the home and away teams.                       | OK   |
| F3\*\* | Finish a match currently in progress and remove it from the scoreboard.                                     |      |
| F4     | Get a summary of matches in progress, ordered by their total score, with ties broken by recency.            |      |

> F3: it is dubious to me the word "remove it", as is not saying "delete it", o choose to just flag it to finished

### Non-Functional Requirements

| ID  | Requirement                                                                                             | Done |
| --- | ------------------------------------------------------------------------------------------------------- | ---- |
| NF1 | Implement the simplest solution that works, focusing on edge cases and avoiding unnecessary complexity. |      |
| NF2 | Use an in-memory store (e.g., collections) to manage the required data.                                 |      |
| NF3 | Adhere to clean code principles, including SOLID design, test-driven development (TDD), and OO design.  |      |
| NF4 | Provide a commit history to reflect the progress, with the solution in a source control repository.     |      |
| NF5 | Include a `README.md` file with project documentation, assumptions, and additional notes.               |      |
| NF6 | Ensure the solution focuses on quality and adheres to high development standards.                       |      |

## TODO-LIST

| Desired Order | Task                                                                                                                     | Done |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ | ---- |
| TSK1          | [ADR - Programming Language Selection for the Project](/ADR/Programming%20Language%20Selection%20for%20the%20Project.md) | DONE |
| TSK2          | [ADR - Project Branches Structure](/Project%20Branches%20Structure.md)                                                   | DONE |
| TSK3          | Node TS init                                                                                                             | DONE |
| TSK4          | Node TS test tools init                                                                                                  | DONE |
| TSK5          | F1                                                                                                                       | DONE |
| TSK6          | F2                                                                                                                       | DONE |
| TSK7          | F3                                                                                                                       |      |
