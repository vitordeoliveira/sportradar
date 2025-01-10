# Programming Language Selection for the Project
## Context and Problem Statement
The task requires implementing a simple library to manage a scoreboard system. The recruiter emphasized frontend-related skills, but the task doesn't explicitly specify a preferred programming language. The three options under consideration are Java, Rust, and JavaScript/TypeScript. Each language has its strengths and weaknesses, and the decision needs to balance personal efficiency, the company's expectations, and the time constraints.

## Considered Options
1. Java
2. Rust
3. JavaScript/TypeScript

## Decision Drivers
| Category                | Details                                                                                   |
|-------------------------|-------------------------------------------------------------------------------------------|
| Task Requirements       | Simplicity and adherence to task guidelines.                                              |
| Setup Time              | Quick setup and minimal overhead.                                                         |
| Development Environment | Compatibility with Arch Linux and Neovim.                                                 |
| Role Alignment          | Relevance to the company's expectations and the recruiter's emphasis on frontend skills.   |
| Time Constraints        | Limited time due to a hard deadline (Monday) and personal weekend plans.                  |
| Pros and Cons           | Evaluation of the advantages and disadvantages of each option.                            |


## Pros and Cons of Each Option
| Language               | Pros                                                                                         | Cons                                                                                                   |
|------------------------|---------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| **Java**              | - Likely aligns with task expectations, as Java appears to be a reasonable assumption for the company's tech stack. <br> - Well-suited for OO design and adherence to SOLID principles. | - Development environment issues: Arch Linux and Neovim are not ideal for Java development. <br> - Verbose syntax and significant boilerplate for a simple task. <br> - Requires fixing various environment configurations, delaying the start. <br> - Potential overengineering for a simple task. <br> - Time-consuming due to verbosity and setup requirements. |
| **Rust**              | - Already set up and ready for development in the current environment. <br> - Personal preference and expertise: Efficient and enjoyable to work with. <br> - Built-in testing framework simplifies test-driven development. <br> - Excellent fit for implementing a simple library. | - The role isn't Rust-focused, so using Rust might not align with the company's expectations. <br> - Limited relevance to the recruiter's emphasis on frontend skills. <br> - Could be perceived as overcomplicating the task for a non-Rust role. |
| **JavaScript/TypeScript** | - Fast setup and minimal configuration required. <br> - Highly relevant to frontend-related skills, aligning with the recruiter's emphasis. <br> - Ideal for a simple task due to its lightweight nature. <br> - Broad familiarity among developers, demonstrating practical skills for the role. | - Performance: Slower compared to Rust for certain tasks. <br> - Lack of built-in testing compared to Rust (though frameworks like Jest mitigate this). <br> - Less strict typing and structure (TypeScript can address this but adds some complexity). <br> - Error handling and debugging can be less intuitive compared to strongly typed languages. |

## Decision Outcome
Chosen Option: **JavaScript/TypeScript**

### Justification:
JavaScript/TypeScript aligns with the recruiter's emphasis on frontend skills and the likely expectations for the role.
It offers a fast and straightforward setup, allowing for quick project initiation.
The simplicity of the language is a good match for the task's requirements.
It demonstrates practical and relevant skills without overengineering or misalignment with the role.

#### Rejected Options:
Java: Despite being a strong candidate, the environment setup and verbosity make it impractical given the time constraints and simplicity of the task.


Rust: While personally preferred, it doesn’t align with the company's expectations for this role and could detract from the overall assessment of relevant skills.

## Consequences
Using JavaScript/TypeScript ensures alignment with role expectations and task requirements.
The decision maximizes available time for implementation and testing while minimizing setup overhead.
It showcases relevant frontend-oriented skills, potentially improving alignment with the company's needs.
