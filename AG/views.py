from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import base64
from django.core.files.storage import default_storage

# Create your views here.

def uploadImagePage(request):
    return render(request, "avengersFileUpload.html")

@csrf_exempt
def imageUpload(request):

    if request.method == "POST":
        #file = UploadFileForm(request.POST, request.FILES)
        image = request.FILES['image']
        file_name = default_storage.save(image.name, image)
        filey = default_storage.open(file_name)
        print(filey)
        #converted_string = "data:image/png;base64, " + str(base64.b64encode(image).decode('utf-8'))
        #print(converted_string)
        return HttpResponse("Hey")
    else:
        print("Smething went wrong")
        return HttpResponse("Something went wrong")