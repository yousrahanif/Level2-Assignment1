3. Explain the difference between any, unknown, and never types in TypeScript.

Answer: The difference between any, unknown, and never in TypeScript is about how strictly the language checks types:

any: It can be any type, and TypeScript won't force you to choose a specific type.

unknown: It can be any type for now, but TypeScript will make you check the typeof it before you can use it in a type-specific way.

never: never means a value will not occur in a normal situation. This often happens with functions that always throw an error.

6. How does TypeScript help in improving code quality and project maintainability?

Answer: As the name suggests, TypeScript tells about the type, making it easier for developers to know what kind of data a variable is expecting. In contrast, with JavaScript, just looking at the variable names doesn't tell us what type of value is being stored. TypeScript also checks for errors at compile time, so we can catch errors before running the code, which helps save time on debugging. Additionally, when projects get bigger, TypeScript keeps things organized by tracking changes.

