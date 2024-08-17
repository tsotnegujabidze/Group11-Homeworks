from turtle import *

#we want to paint a house

#step 1: draw a square

penup()
goto(-100, -80)
pendown()

speed(30)
width(7)
color("purple") 
forward(200)
left(90)

forward(200)
left(90) 

forward(200)
left(90)

forward(200)
left(90)

forward(50) 
left(90)

#end of square

#step 2: make a door for the house

color("yellow") 
begin_fill()
forward(95)
right(90)

forward(40)
right(90)

forward(95)
end_fill()

penup()
goto(100, 120)
pendown()

color("red")
begin_fill()

right(150)
forward(200)

left(120)
forward(200)
end_fill()

penup()
goto(20, 20)
pendown()
color("blue")
left(120)
forward(50)

left(90)
forward(50)

left(90)
forward(50)


left(90)
forward(50)

left(90)
forward(25)

left(90)
forward(50)

left(90)
forward(25)

left(90)
forward(25) 

left(90)
forward(50)


exitonclick()