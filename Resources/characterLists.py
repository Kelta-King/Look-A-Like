import os
from os.path import isfile, join

def checkListAvengers(mypath):

    # List all the images in the directory
    avengers = [f for f in os.listdir(mypath) if isfile(join(mypath, f))]

    # Take name according to the image name to show as the output
    return avengers


#def checkListHP():

