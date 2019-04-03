a=raw_input("enter the string")
n=0
p=0
k=0
j=0
for i in a:
	if i in "aeiou":
		n=n+1
	elif i in "sldkclksdc":
		p=p+1
	elif i in " ":
		k=k+1
	elif i in "?":
		j=j+1
print "number of vowels",n
print "number of const",p
print "number of word",k+1
print "number of ?",j

				

