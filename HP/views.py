from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def uploadImagePage(request):
    return render(request, "harryPotterFileUpload.html")