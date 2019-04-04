import pickle
n=int(input('enter the num'))
f1=open('test.dat','w')
for i in range(n):
	m=int(input('enter the num'))
	pickle.dumb(m,f1)
f1.close
f1=open('test.dat','r')
for i in range(n):
	print pickle.load(f1)

