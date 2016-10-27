class pangram:
    c=0
    flag=0
    def __str__(self,str):
        self.str=str
        self.check=self.def_pangram()
        print self.check
    def def_pangram(self):
        for i in range(65,91):
            for j in self.str:
                if self.flag==0:
                    if (i==ord(j) or i+32==ord(j)):
                        self.flag+=1
                        self.c+=1
            self.flag=0
        if self.c==26:
            return "True"
        else:
            return "False"
