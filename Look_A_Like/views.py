from django.http import HttpResponse
from django.shortcuts import render
import base64
from Graphics.snippets import paths as path
import os

def selectPage(request):
    
    current_path = os.path.dirname(__file__)
    relative_path = path.webImage() + "imageScan-removebg-preview_2.png"
    
    abs_path = os.path.join(current_path, relative_path)
    image_data = open(abs_path, "rb")
    
    converted_string = "data:image/png;base64, " + str(base64.b64encode(image_data.read()).decode('utf-8'))
    universes = [['Avengers', 'avg'], ['Harry Potter', 'hp']]
    return render(request, 'selectUniverse.html', {'img_url':converted_string, 'universes':universes})

"""

current_path = os.path.dirname(__file__)
    relative_path = path.avgImgCheckPath() + "Thanos.jpg"
    
    abs_path = os.path.join(current_path, relative_path)
    image_data = open(abs_path, "rb")
    
    converted_string = "data:image/jpeg;base64, " + str(base64.b64encode(image_data.read()).decode('utf-8'))
    
    

"""