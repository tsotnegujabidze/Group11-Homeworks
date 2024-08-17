from turtle import *

# Set up the screen
bgcolor("skyblue")



speed(1000)

# Draw the castle
# Draw the base
penup()
goto(-200, -200)
pendown()
color("gray")
begin_fill()
forward(400)
left(90)
forward(150)
left(90)
forward(400)
left(90)
forward(150)
left(90)
end_fill()

# Draw the tower
penup()
goto(-100, -50)
pendown()
color("gray")
begin_fill()
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
end_fill()

# Draw the door
penup()
goto(-50, -200)
pendown()
color("brown")
begin_fill()
forward(100)
left(90)
forward(150)
left(90)
forward(100)
left(90)
forward(150)
left(90)
end_fill()

# Draw the windows
penup()
goto(-145, -100)
pendown()
color("yellow")
begin_fill()
forward(40)
left(90)
forward(40)
left(90)
forward(40)
left(90)
forward(40)
left(90)
end_fill()

penup()
goto(105, -100)
pendown()
begin_fill()
forward(40)
left(90)
forward(40)
left(90)
forward(40)
left(90)
forward(40)
left(90)
end_fill()


penup()
goto(25, 100)
pendown()
begin_fill()
left(180)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
end_fill()

#Flag
penup()
goto(-50, 150)
color("black")
pendown()
begin_fill()
right(90)
forward(120)
right(90)
forward(100)
right(90)
forward(50)
right(90)
forward(100)
end_fill() 

#The GOA text on the flag
penup()
goto(-40, 220)
color("green")
write("GOA", font=("Arial", 28, "bold"))

#Draw the king
# Draw the body
penup()
goto(150, 50)
pendown()
color("black")
begin_fill()
circle(30)
end_fill()

# Draw the head
penup()
goto(150, 90)
pendown()
begin_fill()
circle(20)
end_fill()

# Draw the crown
color("gold")
begin_fill()
goto(133, 90)
right(90)
forward(10)
right(115)
forward(20)
end_fill()

begin_fill()
left(50)
forward(20)
right(115)
forward(11)
right(90)
forward(10)
end_fill()

begin_fill()
goto(143, 97)
right(135)
forward(12)
right(90)
forward(12)
end_fill()


# Draw the eyes
penup()
goto(143, 75)
pendown()
dot(5)

penup()
goto(158, 75)
pendown()
dot(5) 

# Draw the arms
penup()
goto(120, 30)
pendown()
color("black")
right(45)
forward(50)
penup()
goto(180, 30)
pendown() 
left(90)
forward(50)

#Flag N2
left(90)
forward(80)
begin_fill()
right(90)
forward(55)
right(90)
forward(30)
right(90)
forward(55)
end_fill()
penup()
color("green")
write("GOA", font=("Arial", 18, "bold"))



# Draw the legs
penup()
goto(135, -5)
pendown()
color("black")
goto(135, -50)
penup()
goto(165, -5)
pendown()
goto(165, -50)

#Draw background
#Draw grass
penup()
goto(-770, -200)
pendown()
color("lightgreen")
begin_fill()
right(180)
forward(1540)
right(90)
forward(200)
right(90)
forward(1540)
forward(200)
right(90)
end_fill()

#Draw tree
# Draw trunk
penup()
goto(-600, -200)
pendown()
color("brown")
begin_fill()
setheading(90)
forward(150)
right(90)
forward(20)
right(90)
forward(150)
end_fill()

# Draw leaves
penup()
goto(-690, 50)
pendown()
color("green")
begin_fill()
circle(100)
end_fill()

#Draw trunk
penup()
goto(600, -200)
pendown()
color("brown")
begin_fill()
setheading(90)
forward(150)
right(90)
forward(20)
right(90)
forward(150)
end_fill()

# Draw leaves
penup()
goto(510, 50)
pendown()
color("green")
begin_fill()
circle(100)
end_fill()




exitonclick()  