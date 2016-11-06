// This Code will convert a PostFix expression to infix expression by using Expression Tree
// This code primarily show how to convert a postfix to an expression tree

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*
* Author : Vipin Chaudhary
* github username: vipin14119
*/
 typedef struct Node // structure of node of tree
 {
 	char data[2];  // store value of operand or operator
 	struct Node* left;  // pointer to left child
 	struct Node* right;  // pointer to right child
 }node;

int top=-1;  // initialising top pointer of stack

typedef struct Stack  // structure of stack to store the pointer to tree nodes
{
	node* PTN;
}stack;

stack S[100];  // stack with a maximum length of 100

node* create(int c)  // function create a newnode
{
	node* newnode=(node*)malloc(sizeof(node));
	newnode->data[0]=c;  // store the operand or operator in it
	newnode->left=NULL;  // no left child and right in starting
	newnode->right=NULL;
	return newnode;
}

void printS()  // this is a function to print stack at a point, use this function to detect error
{
	int i;
	printf("stack at this point is : ");
	for(i=0;i<top;i++)
	{
		printf("%c  ",S[i].PTN->data[0] );
	}
	printf("\n");
}
void printT(node *root)  // function to print tree in Inorder (INFIX)
{

	if(root!=NULL)
	{
		printT(root->left);
		printf("%c ",root->data[0]);
		printT(root->right);
	}
}
int main()
{
	char input[100];  // input stream of postfix expression
	scanf("%s",input);
	int i;
	for(i=0;i<strlen(input);i++)  // run till all characters of input iterated
	{
		/*
		* 1.If character is an operator then create a newnode of that operator namesd as newnode.
		* 2.Pop 2 elements from stack and assign them as right and left child to the newnode.
		* 3.then push the address of newnode in the stack
		*/
		if(input[i]=='+' || input[i]=='-' || input[i]=='*' || input[i]=='/' || input[i]=='%')
		{
			node* newnode=create((int)input[i]);
			newnode->right=S[top].PTN;
			top--;
			newnode->left=S[top].PTN;
			top--;
			S[++top].PTN=newnode;

		}
		else
		{
			/*
			* If character is an operand then simply create a newnode of its data and push its adderss to stack
			*/
			node* newnode=create((int)input[i]);
			S[++top].PTN=newnode;
		}
	}
	printT(S[0].PTN);
	printf("\n");
	return 0;
}
