import os
from os.path import isfile, join

def checkListAvengers(mypath):

    # List all the images in the directory
    avengers = [f for f in os.listdir(mypath) if isfile(join(mypath, f))]
    new_avengers = list()
    for avenger in avengers:
        name = avenger.split(".")
        name = name[0].replace("_", " ").upper()
        new_avengers.append([name, avenger])
        
    # Take name according to the image name to show as the output
    print(new_avengers)
    return avengers


#def checkListHP():

