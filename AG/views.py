from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import base64
from django.core.files.storage import default_storage
import os
from Graphics.snippets import paths as path
from Resources import characterLists as cl

def uploadImagePage(request):
    return render(request, "avengersFileUpload.html")

@csrf_exempt
def imageUpload(request):

    if request.method == "POST":
        
        """
        # Get files
        image = request.FILES['image']

        # Save file
        file_name = default_storage.save("Users\\DPS\\" + image.name, image)
        
        # Openning file process
        filey = default_storage.open(file_name)
        current_path = os.path.dirname(__file__)
        relative_path = path.uploadedImage() + str(image.name)
        abs_path = os.path.join(current_path, relative_path)
        
        # Opening image from the absolute path
        image_data = open(abs_path, "rb")
        
        # Converting image to base64 string
        converted_string = "data:image/jpeg;base64, " + str(base64.b64encode(image_data.read()).decode('utf-8'))
        
        # URL return
        return HttpResponse(converted_string)
        """
        mypath = path.avgImgCheckPath()
        current_path = os.path.dirname(__file__)
        relative_path = mypath
        mypath = os.path.join(current_path, relative_path)

        #print(cl.checkListAvengers(mypath))
        return HttpResponse(str(cl.checkListAvengers(mypath)))
    else:
        print("Smething went wrong")
        return HttpResponse("Something went wrong")