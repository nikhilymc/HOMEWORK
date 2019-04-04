import pickle
f=open('test.dat','w')
f.write('1212')
f.write('hai')
f.close
f=open('test.dat','r')
print( f.read())
f.close()