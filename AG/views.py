from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def uploadImagePage(request):
    return render(request, "avengersFileUpload.html")


def imageUpload(request):

    if request.method == "POST":
        #file = UploadFileForm(request.POST, request.FILES)
        print(request.FILES)
        return HttpResponse("Yoman")
    else:
        print("Smething went wrong")
        return HttpResponse("Something went wrong")