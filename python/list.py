a=[1,"hello",2.5,[2,"hai",3.5],6]
b=[9,9,9]
print a[0]
print a[2]
print a[3][2]
for i in a:
	print i
a[3][2]="hahaha"
print a
b=[1,2,3]
c=b+[1]
d=b*3
print c
print d
a.append(7)
a.extend(b)
print b


