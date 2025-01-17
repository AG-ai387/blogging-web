import Link from "next/link"

export default function TypeScript(){
    return(

<div className="detail">

<h1>What is TypeScript?</h1>
<p>TypeScript is a syntactic superset of JavaScript which adds static typing.

This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.

TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.
    Why should I use TypeScript?
JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.

In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.

TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.

TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.

</p>
</div>
)
}