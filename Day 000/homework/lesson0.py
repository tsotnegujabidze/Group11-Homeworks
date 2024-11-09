from turtle import *

#we want to paint a house

#step 1:  draw a square
# shape("turtle")
speed(130)
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
#end of square

#drawing a door

forward(70)
color("yellow")
begin_fill()
left(90)
forward(100)    #height of the door
right(90)
forward(60)
right(90) 
forward(100)
end_fill()

#roof

penup()
goto(200, 200)
pendown()

color('red')
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#windows

penup()
goto(70,130)
pendown()

color("pink")
left(120)
forward(60)
left(90)
forward(50)
left(90)
forward(60)
left(90)
forward(50)

penup()
goto(100,130)
pendown()

left(180)
forward(50)

penup()
goto(70,155)
pendown()

right(90)
forward(60)




exitonclick()