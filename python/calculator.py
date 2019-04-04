def add(a,b):
	
	return a+b 
def div(a,b):
	if b==0:
		print "do not enter zero"
	else:
		return a/b 
def mul(a,b):
	
	return a*b 
def sub(a,b):
	
	return a-b 

a=input("enter the 1 num")
b=input("enter the 2nd num")
print "addition",1
print "division",2
print "multiplication 3"
print "substration"
c=int(input("enter your choice"))
if c==1:
	print add(a,b)
elif c==2: 
	print div(a,b)
elif c==3: 
	print mul(a,b)
elif c==4:
	print sub(a,b)
else:
	print "invalid"
