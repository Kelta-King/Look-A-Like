from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import base64
from django.core.files.storage import default_storage
import os
from Graphics.snippets import paths as path

# Create your views here.

def uploadImagePage(request):
    return render(request, "avengersFileUpload.html")

@csrf_exempt
def imageUpload(request):

    if request.method == "POST":
        #file = UploadFileForm(request.POST, request.FILES)
        image = request.FILES['image']
        file_name = default_storage.save("Users\\DPS\\" + image.name, image)
        filey = default_storage.open(file_name)
        current_path = os.path.dirname(__file__)
        relative_path = "..\\Users\\DPS\\" + str(image.name)
        abs_path = os.path.join(current_path, relative_path)
        #print(abs_path)
        image_data = open(abs_path, "rb")
        print(image_data)
        #converted_string = "data:image/jpeg;base64, " + str(base64.b64encode(image_data).decode('utf-8'))
        #print(converted_string)
        converted_string = "Up"
        return HttpResponse(converted_string)
    else:
        print("Smething went wrong")
        return HttpResponse("Something went wrong")