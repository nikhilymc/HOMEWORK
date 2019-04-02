a=int(input("enter the num"))
for i in range(a,0,-1):
	print "tick",i
for i in range(10):
	print i
for i in range(2,100,2):
	if i==10:
		continue
	print i
for i in range(2,100,2):
	if i==10:
		break
	print i	
for i in "python":
	if i=="h":
		continue
	print i	
for i in "python":
	if i=="h":
		break
	print i	
