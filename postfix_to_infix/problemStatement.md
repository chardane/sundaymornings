# PostFix to Infix Conversion

**Note** : It would be great if you read what are infix, prefix and postfix expression first,  [Click here ](http://interactivepython.org/runestone/static/pythonds/BasicDS/InfixPrefixandPostfixExpressions.html)

### Problem Statement
> You are given a postFix expression **S**, You have to convert it into a inFix expression.

##### Input
- A String **S** which is postfix expression
- len(**S**) <= 10^6
##### Output
- A String **X** which is infix conversion of **S**

##### TestCase1
- **input**: `234+*`
- **output**: `2 * 3 + 4`

##### TestCase2
- **input**: `234*23+/-`
- **output**: `2 - 3 * 4 / 2 + 3`

##### TestCase3
- **input**: `9812/+-`
- **output**: `9 - 8 + 1 / 2`
