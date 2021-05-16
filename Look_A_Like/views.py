from django.http import HttpResponse
from django.shortcuts import render

def selectPage(request):
    
    local_path = "../static/Images/1/AG/avengersWall.jpg"
    
    with open(local_path, "rb") as image_data:
        converted_string = base64.b64encode(image_data.read())
        print(converted_string)
    
    return render(request, 'selectUniverse.html', {'img':converted_string})