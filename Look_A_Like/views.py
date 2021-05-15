from django.http import HttpResponse
from django.shortcuts import render

def selectPage(request):
    return render(request, 'selectUniverse.html')