import os
from os.path import isfile, join

def checkListAvengers(mypath):

    # List all the images in the directory
    avengers = [f for f in os.listdir(mypath) if isfile(join(mypath, f))]

    # New list to contain name and image name
    new_avengers = list()

    # Itration to get all the details
    for avenger in avengers:
        name = avenger.split(".")
        name = name[0].replace("_", " ").upper()
        new_avengers.append([name, avenger])

    # Return new avengers list
    return new_avengers


#def checkListHP():

