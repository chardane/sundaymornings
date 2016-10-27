#include <stdio.h>
#include <stdlib.h>

/*
* Author : Vipin Chaudhary
* github username : vipin14119
*/

typedef struct Node // structure of node
{
	int data;  // stores data
	struct Node* left;  // pointer to left child
	struct Node* right;  // pointer to right child
}node;

node *create(int d)  // function to create node
{
	node* newnode=(node*)malloc(sizeof(node));
	newnode->data=d;
	newnode->left=NULL;
	newnode->right=NULL;
	return newnode;
}
node* addnode(node* root,int d)  // function to insert node in BST
{
	if(root==NULL)  // if tree is empty
	{
		return create(d);  // create its first node and return its address
	}
	else if (d<root->data)  // If data is less than current node data then move to its left subtree
	{
		root->left=addnode(root->left,d);
	}
	else  // If data is greater then current node data then move to right subtree
	{
		root->right=addnode(root->right,d);
	}
	return root; // return its address
}

int search(node* root,int d)  // function to search data in BSt
{
	if(root==NULL )  // If tree is empty
	{
		return -1;
	}
	else if(root->data==d)  // if data is in current node then raise founded
	{
		return 1;

	}
	else if(root->data<d)  // If data is greater than current node data then move to right subtree
	{
		search(root->right,d);
	}
	else if (root->data>d)  // If data is less than current node data then move to left subtree
	{
		search(root->left,d);
	}
}

void printT(node* root)  // function to print tree(Preorder)
{
	if(root!=NULL)
	{
		printf("%d ",root->data );
		printT(root->left);
		printT(root->right);
	}
}
node* findMin(node * root) // function to find minimum data in the tree
{
	if(root==NULL)  // if tree is empty
	{
		printf("Tree empty\n");
	}
	else if (root->left==NULL)  // if there is no left child of current node then its min
	{
		printf("%d\n",root->data );
		return root;
	}
	else  // if there is left child then move to left subtree
	{
		findMin(root->left);
	}
}
node* findMax(node * root)   // function to find maximum data in the tree
{
	if(root==NULL)  // if tree is empty
	{
		printf("tree empty\n");
		return root;
	}
	else if(root->right==NULL)  // if there is no right child of current node then its max
	{
		return root;
		// printf("%d\n",root->data );
	}
	else  // if there is right child then move to right subtree
	{
		findMax(root->right);
	}

}

node* deleteNode(node* root, int key)
{
    // base case
    if (root == NULL)
    	{
    		return root;
    	}

    // If the key to be deleted is smaller than the root's key,
    // then it lies in left subtree
    if (key < root->data)
    {
        root->left = deleteNode(root->left, key);
    }

    // If the key to be deleted is greater than the root's key,
    // then it lies in right subtree
    else if (key > root->data)
    {

        root->right = deleteNode(root->right, key);
    }

    // if key is same as root's key, then This is the node
    // to be deleted
    else
    {
        // node with only one child or no child
        if (root->left == NULL)
        {
            node *temp = root->right;
            free(root);
            return temp;
        }
        else if (root->right == NULL)
        {
            node *temp = root->left;
            free(root);
            return temp;
        }

        // node with two children: Get the inorder successor (smallest
        // in the right subtree)
        node* temp = findMin(root->right);

        // Copy the inorder successor's content to this node
        root->data = temp->data;

        // Delete the inorder successor
        root->right = deleteNode(root->right, temp->data);
    }
    return root;
}

int numOFNodes(node* root)  // Function to calculate the number of nodes in the tree
{
	if(root==NULL)  // If node is NULL then return 0
	{
		return 0;
	}
	else  // if its not null then return 1+ number of nodes of its both left and right sub trees
	{
		return 1+numOFNodes(root->left)+numOFNodes(root->right);
	}
}

int numOFLeaves(node* root)  // Function to calculate the number of leaves in a tree
{
	if(root==NULL)  // if node is null ther return 0
	{
		return 0;
	}
	else if (root!=NULL && root->left==NULL && root->right==NULL)  // If it is leaf then return 1
	{
		return 1;
	}
	else  // else add the leaves in the left and right subtree
	{
		return numOFLeaves(root->left)+numOFLeaves(root->right);
	}
}
int main(int argc, char const *argv[])
{

	node* root=NULL;
	int i,d;
	for(i=0;i<8;i++)
	{
		scanf("%d",&d);
		root=addnode(root,d);
	}
	printT(root);
	printf("Number of nodes in tree is %d\n",numOFNodes(root));
	printf("Number of leaves in tree is %d\n",numOFLeaves(root));
	printf("Max node is %d\n",findMax(root)->data );
	return 0;
}
