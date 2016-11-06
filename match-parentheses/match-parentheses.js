/*
 * Matching parentheses problem
 * Given a string, return true or false if the parentheses match.
 * ex.
    bc 123 } ] ) " => t
    " ( (   ) ) )" => f
    " ( ( (   ) ) " => f
    " ( [ ) ] " => f
    " () [] {} " => t
    " ( {} ) "
 *
 * Psuedocode:
 *  Read in string
 *  If open bracket, put onto the top of the stack.
 *  Continue reading the string.
 *  If encounter another open bracket, put that onto the top of the stack.
 *  If encounter a closing bracket, if closing bracket == bracket on top of the stack,
 *     Pop the top of the stack.
 *     Else, return false.
 *  If it's not a parentheses, continue reading.
 */

function equalParentheses(var str) {
    var stack = [];
    for (var i = 0; i < str.length(); i++) {
        c = str.charAt[i];
        if (c == "{" || c == "(" || c == "[") {
            stack.push(c);
        } else  if ( c == "}" || c == "]" || c == ")" ) { 
            if (matchParens(stack[0], c) == true) {
                stack.pop();
            } else { 
                return false;
            }
        } 
    }
    if (stack[0] == NULL) {
        return true;
    }
}

// Helper function
function matchParens(var a, var b) {
    if (a == "{" && b == "}") {
        return true;
    } else if (a == "(" && b == ")") {
        return true;
    } else if (a == "[" && b == "]") {
        return true;
    } else {
        return false;
    }
}

