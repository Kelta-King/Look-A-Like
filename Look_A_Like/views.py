from django.http import HttpResponse
from django.shortcuts import render
import base64
from Graphics.snippets import paths as path
from Resources import universeData
import os

def selectPage(request):
    
    # Make relative path for image
    current_path = os.path.dirname(__file__)
    relative_path = path.webImage() + "imageScanBGLess.png"
    abs_path = os.path.join(current_path, relative_path)
    
    # Opening image
    image_data = open(abs_path, "rb")
    
    # Convert loaded image to base64
    converted_string = "data:image/png;base64, " + str(base64.b64encode(image_data.read()).decode('utf-8'))
    
    # Bringing universe list for frontend
    universes = universeData.universeList()
    return render(request, 'selectUniverse.html', {'img_url':converted_string, 'universes':universes})

