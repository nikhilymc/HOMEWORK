class person:
	def __init__(self,name,age,cgpa):
		self.name=name
        	self.age=age
        	self.cgpa=cgpa
student=person("nikhil",25,9)
print (student.name,student.age,student.cgpa)
name=input("enter the name")
age=input("age")
cgpa=input("cgpa")
student1=person(name,age,cgpa)
print (student1.name,student1.age,student1.cgpa)